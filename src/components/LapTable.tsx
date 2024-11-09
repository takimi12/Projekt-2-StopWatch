import {LapEntry} from './LapEntry';
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
