export default function SelectTip() {
  return (
    <div>
      <label htmlFor="selectTip">Select Tip %</label>
      <input 
        type="button"
        value="5%"
        className="tip"
      />
      <input 
        type="button"
        value="10%"
        className="tip"
      />
      <input 
        type="button"
        value="15%"
        className="tip"
      />
      <input 
        type="button"
        value="25%"
        className="tip"
      />
      <input 
        type="button"
        value="50%"
        className="tip"
      />
      <input
        type="text"
        placeholder="Custom"
      />
    </div>
  )
}