import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../filterSlice'
import { Wrapper, Input } from './Filter.styled';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Wrapper>
  );
};

Filter.propTypes = {};

export default Filter;
