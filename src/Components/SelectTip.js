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

      {props.tip == "" ? 
      <input
        type="number"
        name="tip"
        placeholder="Custom"
        className="custom"
        value={props.tip}
        onChange={props.handleTip}
      />:
      <input
        type="number"
        name="tip"
        placeholder="Custom"
        className="custom"
        value={props.tip}
        onChange={props.handleTip}
      />
      }

    </div>
  )
}