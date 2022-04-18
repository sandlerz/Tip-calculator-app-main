import icon from '../images/icon-person.svg'

export default function NumberOfPeople(props) {
  const {bill , tip , numberOfPeople} = props.calculator
  
  let style = null
  let error = null
  
  if(numberOfPeople == ""){
    if(bill || tip){
      error = <p className='error-msg'>Can't be zero</p>
      style = {border: "0.2rem solid var(--error)"}
    }
  }

  if(numberOfPeople === "0"){
    error = <p className='error-msg'>Can't be zero</p>
    style = {border: "0.2rem solid var(--error)"}
  }

  return (
    <div>
      <div className='error-container'>
        <label htmlFor="numberOfPeople">Number of People</label>
        {error}
      </div>
      <div className='numberOfPeople-input-container'>
        <img className='input-icon' src={icon} />
        <input 
          type="text" 
          id="numberOfPeople" 
          placeholder="0"
          name="numberOfPeople"
          value={props.calculator.numberOfPeople}
          onChange={props.handlePeople}
          maxLength="2"
          className='input-numberOfPeople'
          style={style}
        />
      </div>
    </div>
  );
}
