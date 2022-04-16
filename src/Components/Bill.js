import dollar from '../images/icon-dollar.svg'

export default function Bill(props) {

  return (
    <div className="bill-container">
      <label className="bill-title" htmlFor="bill">Bill</label>
      <div className="bill-input-container">
        <img className='input-icon' src={dollar} />
        <input
          type="text"
          id="bill"
          placeholder="0"
          name="bill"
          value={props.bill}
          onChange={props.handleBill}
          maxLength="6"
          className="input-bill"
        />
      </div>
    </div>
  )
}