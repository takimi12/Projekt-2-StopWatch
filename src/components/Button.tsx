
import styled, { css } from 'styled-components';

interface StyledButtonProps {
  variant: 'main' | 'secondary' | 'danger';
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  font-size: 1em;
  margin: 5px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;

  ${(props) =>
    props.variant === 'main' &&
    css`
      background-color: green;
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: blue;
    `}

  ${(props) =>
    props.variant === 'danger' &&
    css`
      background-color: red;
    `}
`;

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant: 'main' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, variant }) => {
  return <StyledButton onClick={onClick} variant={variant}>{text}</StyledButton>;
};

