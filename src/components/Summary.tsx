import styled from 'styled-components';

const SummaryWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  margin-top: 20px;
  border-radius: 8px;
`;

interface SummaryProps {
  totalTime: number;
  laps: number[];
}

const formatTime = (milliseconds: number) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(3);
  return `${minutes}:${seconds.padStart(6, '0')}`;
};

export const Summary: React.FC<SummaryProps> = ({ totalTime, laps }) => {
  const averageLap = laps.length ? laps.reduce((a, b) => a + b, 0) / laps.length : 0;
  const fastestLap = laps.length ? Math.min(...laps) : 0;
  const slowestLap = laps.length ? Math.max(...laps) : 0;

  return (
    <SummaryWrapper>
      <p>Total time: {formatTime(totalTime)} (mm:ss.SSS)</p>
      <p>Average lap: {formatTime(averageLap)} (mm:ss.SSS)</p>
      <p>Fastest lap: {formatTime(fastestLap)} (mm:ss.SSS)</p>
      <p>Slowest lap: {formatTime(slowestLap)} (mm:ss.SSS)</p>
      <p>Total laps: {laps.length}</p>
    </SummaryWrapper>
  );
};
