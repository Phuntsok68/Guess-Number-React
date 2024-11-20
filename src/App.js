import { useState } from "react";
export default function App() {
  let [secretNum, setSecret] = useState(Math.floor(Math.random() * 100) + 1);
  console.log(secretNum);
  let [message, setMessage] = useState("");
  const [input, setInput] = useState(0);
  const [range, setRange] = useState(1);
  function handleNext() {
    setInput((num) => num + range);
  }
  function handlePrevious() {
    setInput((num) => num - range);
  }
  function handleChange(e) {
    setRange(Number(e.target.value));
  }
  function handleReset() {
    setSecret(Math.floor(Math.random() * 100) + 1);
    setRange(1);
    setInput(0);
    setMessage("");
  }
  function handleInput(e) {
    setInput(Number(e.target.value));
  }
  function handleSubmit() {
    if (input === secretNum) setMessage("Congrats! you did it!");
    else setMessage("Please try again!");
  }
  return (
    <div className="container">
      <h1>Guess the number!</h1>

      <input
        type="range"
        min={1}
        max={10}
        value={range}
        onChange={handleChange}
      ></input>
      <label> Step: {range}</label>
      <div>
        <button onClick={handlePrevious}>-</button>
        <input type="text" value={input} onChange={handleInput}></input>
        <button onClick={handleNext}>+</button>
      </div>
      <div>{input}</div>
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
      <button onClick={handleReset} className="reset">
        Reset
      </button>
      <div className="message">{message}</div>
    </div>
  );
}
