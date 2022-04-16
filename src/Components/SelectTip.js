export default function SelectTip(props) {

  return (
    <div>
      <label htmlFor="selectTip">Select Tip %</label>

      <button
        value="5"
        name="tip"
        className="tip"
        onClick={props.handleTip}
      >5%</button>

      <button
        value="10"
        name="tip"
        className="tip"
        onClick={props.handleTip}
      >10%</button>

      <button
        value="15"
        name="tip"
        className="tip"
        onClick={props.handleTip}
      >15%</button>

      <button
        value="25"
        name="tip"
        className="tip"
        onClick={props.handleTip}
      >25%</button>

      <button
        value="50"
        name="tip"
        className="tip"
        onClick={props.handleTip}
      >50%</button>

      <input
        type="text"
        name="tip"
        placeholder="Custom"
        value={props.tip}
        onChange={props.handleTip}
        maxLength="3"
        className="input-selectTip"
      />

    </div>
  )
}