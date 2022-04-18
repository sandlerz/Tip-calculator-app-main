export default function Total(props) {

  return (
    <div className="Total">
      <div>
        <p className="total-quantity">Total</p>
        <p className="total-person">/ person</p>
      </div>
      <div className="total-result">
      ${isNaN(props.result) ? "0.00" : props.result}
      </div>
    </div>
  )
}