import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
`;

export const Label = styled.label`
  display: grid;
  gap: 6px;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px #7c3aed22;
  }
`;

export const Button = styled.button`
  justify-self: start;
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  background: #7c3aed;
  color: #fff;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #6d28d9;
  }
`;

export const ErrorText = styled.p`
  color: #dc2626;
  margin: 4px 0 0;
  font-size: 13px;
`;
