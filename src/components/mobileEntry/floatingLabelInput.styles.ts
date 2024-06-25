import styled from 'styled-components';

interface LabelProps {
  isFocused: boolean;
  hasValue: boolean;
}

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: ${({ isFocused, hasValue }) => (isFocused || hasValue ? '0' : '50%')};
  left: 10px;
  transform: translateY(-50%);
  background-color: white;
  padding: 0 5px;
  color: ${({ isFocused, hasValue }) => (isFocused || hasValue ? '#000' : '#aaa')};
  font-size: ${({ isFocused, hasValue }) => (isFocused || hasValue ? '12px' : '16px')};
  transition: all 0.2s ease-in-out;
  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &:focus + ${Label} {
    top: 0;
    transform: translateY(-50%);
    color: #000;
    font-size: 12px;
  }
`;
