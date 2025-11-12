import styled from 'styled-components';

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid #eee;
  border-radius: 10px;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const Number = styled.span`
  font-variant-numeric: tabular-nums;
  color: #374151;
`;

export const RemoveBtn = styled.button`
  padding: 6px 10px;
  border: none;
  border-radius: 8px;
  background: #ef4444;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;
