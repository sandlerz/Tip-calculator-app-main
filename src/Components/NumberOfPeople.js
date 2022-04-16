import icon from '../images/icon-person.svg'

export default function NumberOfPeople(props) {
  return (
    <div>
      <label htmlFor="numberOfPeople">Number of People</label>
      <div className='numberOfPeople-input-container'>
        <img className='input-icon' src={icon} />
        <input 
          type="text" 
          id="numberOfPeople" 
          placeholder="0"
          name="numberOfPeople"
          value={props.numberOfPeople}
          onChange={props.handlePeople}
          maxLength="2"
          className="input-numberofpeople"
        />
      </div>
    </div>
  );
}
