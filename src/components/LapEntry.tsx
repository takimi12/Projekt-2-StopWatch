import styled from 'styled-components';

const TableRow = styled.tr`
  text-align: center;
  background-color: #f8f8f8;
  &:nth-child(even) {
    background-color: #e8e8e8;
  }
`;

interface LapEntryProps {
  number: number;
  lapTime: number;
}

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;
  return `${minutes}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
};

export const LapEntry: React.FC<LapEntryProps> = ({ number, lapTime }) => {
  return (
    <TableRow>
      <td>{number}</td>
      <td>{formatTime(lapTime)} gg:mm:ss</td>
    </TableRow>
  );
};
