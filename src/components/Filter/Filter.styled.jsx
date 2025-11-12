import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 12px 0 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px #7c3aed22;
    outline: none;
  }
`;
