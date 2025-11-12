import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { Empty , List} from './ ContactList.styled';



export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visible = useMemo(() => {
    const q = filter.trim().toLowerCase();
    return q
      ? contacts.filter(c => c.name.toLowerCase().includes(q))
      : contacts;
  }, [contacts, filter]);

  if (visible.length === 0) {
    return <Empty>No contacts</Empty>;
  }

  return (
    <List>
      {visible.map(c => (
        <ContactItem key={c.id} contact={c} />
      ))}
    </List>
  );
};

ContactList.propTypes = {};

export default ContactList;
