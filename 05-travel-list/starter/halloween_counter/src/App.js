import React from 'react';
import CountdownTimer from './CountdownTimer';

import './App.css';

export default function App() {
  const HALLOWEEN_IN_MS = new Date('Oct 31, 2023 00:00:00').getTime();

  const dateTimeToHalloween = HALLOWEEN_IN_MS;

  return (
    <div>
      <h1 className='count-headline'>- Countdown to -</h1>
      <p className='count-text'>HALLOWEEN</p>
      <CountdownTimer targetDate={dateTimeToHalloween} />
    </div>
  );
}
