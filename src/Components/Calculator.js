import React, { useState } from "react";

import Bill from "./Bill";
import SelectTip from "./SelectTip";
import NumberOfPeople from "./NumberOfPeople";
import TipAmount from "./TipAmount";
import Total from "./Total";

import "../Style/calculator.css";

const validNumber = /^[0-9]*\.?[0-9]*$/

export default function Calculator() {
  const [calculator, setCalculator] = useState({
    bill: "",
    tip: "",
    numberOfPeople: "",
  });

  const handleCalculator = (event) => {
    const { value, name } = event.target;
    const isValid = validNumber.test(value)

    if(isValid || value == ""){
      setCalculator((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const reset = () => {
    setCalculator({
      bill: "",
      tip: "",
      numberOfPeople: "",
    });
  };

  const {bill , tip , numberOfPeople} = calculator
  const totalTip = (bill * tip) / 100;
  const tipPerson = totalTip / numberOfPeople;

  return (
    <div className="Calculator">

      <div className="left-container">
        <Bill handleBill={handleCalculator} bill={calculator.bill}/>
        <SelectTip handleTip={handleCalculator} tip={calculator.tip}/>
        <NumberOfPeople handlePeople={handleCalculator} numberOfPeople={calculator.numberOfPeople}/>
      </div>

      <div className="right-container">
        <TipAmount result={tipPerson.toFixed(2)} />
        <Total result={totalTip.toFixed(2)} />
        <button 
          className="btn-reset" 
          onClick={reset} 
          disabled={!(bill || tip || numberOfPeople)}
        > Reset </button>
      </div>

    </div>
  );
}
