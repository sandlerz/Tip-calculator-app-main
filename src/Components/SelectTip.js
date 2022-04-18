const btns = [5, 10, 15, 25, 50]

export default function SelectTip(props) {
  const style = {backgroundColor: "var(--Strong-cyan)", color: "var(--Very-dark-cyan)"}

  const btnArr = btns.map(btn => (
    <button
    key={btn}
    value={btn}
    name="tip"
    className="btn-tip"
    onClick={props.handleTip}
    style={props.tip == btn ? style : null}
    >{btn}%</button>
  ))

  return (
    <div>
      <label htmlFor="selectTip">Select Tip %</label>

      <div className="input-selectTip-container">
        {btnArr}
        
        <input
          type="text"
          name="tip"
          placeholder="Custom"
          value={props.tip}
          onChange={props.handleTip}
          maxLength="3"
        />

      </div>

    </div>
  )
}