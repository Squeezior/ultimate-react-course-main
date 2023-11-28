import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date('June 21 2027');
  date.setDate(date.getDate() + count);

  function nextCountHandler() {
    setCount((c) => c + step);
  }
  function previousCountHandler() {
    setCount((c) => c - step);
  }

  const stepHandler = (e) => {
    setStep(Number(e.target.value));
  };

  const inputDaysHandler = (e) => {
    setCount(Number(e.target.value));
  };

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          step='1'
          value={step}
          onChange={stepHandler}
        ></input>

        <span>Step: {step} </span>
      </div>
      <div>
        <button onClick={previousCountHandler}>-</button>
        <input type='text' value={count} onChange={inputDaysHandler}></input>
        <button onClick={nextCountHandler}>+</button>
      </div>
      <span>{count === 0 && `Today is ${date.toDateString()}`}</span>
      <span>
        {count > 0 && `${count} days from today is ${date.toDateString()}`}
      </span>
      <span>{count < 0 && `${count} days ago was ${date.toDateString()}`}</span>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
