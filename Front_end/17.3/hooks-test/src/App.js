import React, { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [isMultiple, setMultiple] = useState(false);
  const [timer, setTimer] = useState(1);

  const TIMER_INTERVAL = 1000;
  const NUMBER_TIMEOUT = 10000;
  const MESSAGE_TIMEOUT = 4000;
  const MIN_RANDOM = 1;
  const MAX_RANDOM = 100;

  const doMath = () => {
    setNumber(Math.round(Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM)));
  }

  const testRandom = () => {
    if (number % 5 === 0 || number % 3 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), MESSAGE_TIMEOUT);
    }
    return setMultiple(false);
  }

// testando git

  useEffect(() => {
    testRandom();
  }, [number])

  return (
    <div>
      {isMultiple && 'certo'}
    </div>
  );
}

export default App;
