import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TimerDisplay } from './components/TimerDisplay';
import { Button } from './components/Button';
import { LapTable } from './components/LapTable';
import { Summary } from './components/Summary';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App: React.FC = () => {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [lapTime, setLapTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setTotalTime((prev) => prev + 100);
        setLapTime((prev) => prev + 100);
      }, 100);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning]);

  const startHandler = () => setIsRunning(true);
  const stopHandler = () => setIsRunning(false);
  const resetHandler = () => {
    setTotalTime(0);
    setLapTime(0);
    setLaps([]);
  };
  const lapHandler = () => {
    setLaps((prevLaps) => [...prevLaps, lapTime]);
    setLapTime(0);
  };

  return (
    <AppContainer>
      {isRunning && <TimerDisplay time={totalTime} />}
      {isRunning && <TimerDisplay time={lapTime} />}
      
      <div>
        <Button text="Start" onClick={startHandler} variant="main" />
        <Button text="Stop" onClick={stopHandler} variant="danger" />
        <Button text="Reset" onClick={resetHandler} variant="secondary" />
        <Button text="Lap" onClick={lapHandler} variant="secondary" />
      </div>
      
      {isRunning && <LapTable laps={laps} />}
      
      {!isRunning && laps.length > 0 && <Summary totalTime={totalTime} laps={laps} />}
    </AppContainer>
  );
};

export default App;
