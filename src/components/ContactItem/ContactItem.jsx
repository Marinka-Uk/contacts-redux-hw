import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../contactsSlice';
import { Item, Name, Number, RemoveBtn } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onRemove = () => dispatch(removeContact(contact.id));

  return (
    <Item>
      <Name>{contact.name}</Name>
      <Number>{contact.number}</Number>
      <RemoveBtn type="button" onClick={onRemove}>Delete</RemoveBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
