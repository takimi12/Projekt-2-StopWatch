
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

export const LapEntry: React.FC<LapEntryProps> = ({ number, lapTime }) => {
  return (
    <TableRow>
      <td>{number}</td>
      <td>{lapTime}</td>
    </TableRow>
  );
};

