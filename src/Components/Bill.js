export default function Bill(props) {

  return (
    <div>
      <label htmlFor="bill">Bill</label>
      <input
        type="number"
        id="bill"
        placeholder="0"
        name="bill"
        value={props.bill}
        onChange={props.handleBill}
      />
    </div>
  )
}