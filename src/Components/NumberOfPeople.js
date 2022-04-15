export default function NumberOfPeople(props) {
  return (
    <div>
      <label htmlFor="numberOfPeople">Number of People</label>
      <input 
        type="number" 
        id="numberOfPeople" 
        placeholder="0"
        name="numberOfPeople"
        value={props.numberOfPeople}
        onChange={props.handlePeople}
      />
    </div>
  );
}
