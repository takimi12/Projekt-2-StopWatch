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

export const Summary: React.FC<SummaryProps> = ({ totalTime, laps }) => {
  const averageLap = laps.length ? laps.reduce((a, b) => a + b, 0) / laps.length : 0;
  const fastestLap = laps.length ? Math.min(...laps) : 0;
  const slowestLap = laps.length ? Math.max(...laps) : 0;

  return (
    <SummaryWrapper>
      <p>Total time: {totalTime}</p>
      <p>Average lap: {averageLap}</p>
      <p>Fastest lap: {fastestLap}</p>
      <p>Slowest lap: {slowestLap}</p>
      <p>Total laps: {laps.length}</p>
    </SummaryWrapper>
  );
};

