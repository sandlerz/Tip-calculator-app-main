export default function Total(props) {

  return (
    <div className="Total">
      <div>
        <p className="total-quantity">Total</p>
        <p className="total-person">/ person</p>
      </div>
      <div className="total-result">
        ${props.result ? props.result : "0.00"}
      </div>
    </div>
  )
}