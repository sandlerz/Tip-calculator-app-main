export default function TipAmount(props) {

  return (
    <div className="TipAmount">
      <div>
        <p className="total-quantity">Tip Amount</p>
        <p className="total-person">/ person</p>
      </div>
      <div className="total-result">
        ${isNaN(props.result) ? "0.00" : props.result}
      </div>
    </div>
  )
}