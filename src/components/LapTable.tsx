import { LapEntry } from './LapEntry';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.thead`
  background-color: #333;
  color: white;
`;

interface LapTableProps {
  laps: number[];
}

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;
  return `${minutes}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
};

export const LapTable: React.FC<LapTableProps> = ({ laps }) => {
  return (
    <Table>
      <TableHeader>
        <tr>
          <th>Lap</th>
          <th>Time</th>
        </tr>
      </TableHeader>
      <tbody>
        {laps.map((lap, index) => (
          <LapEntry key={index} number={index + 1} lapTime={lap} />
        ))}
      </tbody>
    </Table>
  );
};
