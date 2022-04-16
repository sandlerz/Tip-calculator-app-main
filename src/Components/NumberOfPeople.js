import icon from '../images/icon-person.svg'

export default function NumberOfPeople(props) {
  const style = {border: "0.2rem solid var(--error)"}
  const {bill , tip , numberOfPeople} = props.calculator

  return (
    <div>
      <div className='error-container'>
        <label htmlFor="numberOfPeople">Number of People</label>
        { (!numberOfPeople && bill && tip) && <p className='error-msg'>Can't be zero</p> }
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
          style={!numberOfPeople && bill && tip ? style : null }
        />
      </div>
    </div>
  );
}
