
import styled from 'styled-components';

const TimeWrapper = styled.div`
  font-size: 2em;
  font-family: monospace;
  margin: 10px 0;
`;

interface TimerDisplayProps {
  time: number;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  const minutes = String(Math.floor(time / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');
  
  return <TimeWrapper>{`${minutes}:${seconds}:${milliseconds}`}</TimeWrapper>;
};


