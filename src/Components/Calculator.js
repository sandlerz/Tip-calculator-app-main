import React, { useEffect, useState } from "react";

import Bill from "./Bill";
import SelectTip from "./SelectTip";
import NumberOfPeople from "./NumberOfPeople";
import TipAmount from "./TipAmount";
import Total from "./Total";

import "../Style/calculator.css";

export default function Calculator() {
  const [calculator, setCalculator] = useState({
    bill: "",
    tip: "",
    numberOfPeople: "",
    reset: false,
  });

  const handleCalculator = (event) => {
    const { value, name } = event.target;
    setCalculator((prev) => ({
      ...prev,
      reset: true,
      [name]: Number(value),
    }));
  };

  const reset = () => {
    setCalculator({
      bill: "",
      tip: "",
      numberOfPeople: "",
      reset: false,
    });
  };

  console.log()

  const bill = calculator.bill;
  const tip = calculator.tip;
  const numberOfPeople = calculator.numberOfPeople;

  const totalTip = (bill * tip) / 100;
  const tipPerson = totalTip / numberOfPeople;

  return (
    <div className="Calculator">
      <div className="left-container">
        <Bill handleBill={handleCalculator} bill={calculator.bill} />
        <SelectTip handleTip={handleCalculator} tip={calculator.tip}/>
        <NumberOfPeople handlePeople={handleCalculator} numberOfPeople={calculator.numberOfPeople}/>
      </div>
      <div className="right-container">
        <TipAmount result={tipPerson.toFixed(2)} />
        <Total result={totalTip.toFixed(2)} />

        { calculator.reset ?
          <button onClick={reset} className="btn-reset">
          Reset
          </button> :
          <button className="btn-reset-unselect">
          Reset
          </button>
        }
      </div>
    </div>
  );
}
