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

  function nextStepHandler() {
    setStep((s) => s + 1);
  }
  function previousStepHandler() {
    setStep((s) => s - 1);
  }

  function nextCountHandler() {
    setCount((c) => c + step);
  }
  function previousCountHandler() {
    setCount((c) => c - step);
  }

  return (
    <div>
      <div>
        <button onClick={previousStepHandler}>-</button>
        <span>Step: {step} </span>
        <button onClick={nextStepHandler}>+</button>
      </div>
      <div>
        <button onClick={previousCountHandler}>-</button>
        <span>Count: {count}</span>
        <button onClick={nextCountHandler}>+</button>
      </div>
      <span>{count === 0 && `Today is ${date.toDateString()}`}</span>
      <span>
        {count > 0 && `${count} days from today is ${date.toDateString()}`}
      </span>
      <span>{count < 0 && `${count} days ago was ${date.toDateString()}`}</span>
    </div>
  );
}

export default App;
