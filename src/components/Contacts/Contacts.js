import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContact } from '../../redux/phoneBook/phoneApiOperations';

import FormPhonebook from '../PhoneBook';
import ContactItem from '../ContactItem';
import Filter from '../Filter/Filter';
import Section from '../Section.jsx';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContact(), [dispatch]));

  return (
    <div>
      <FormPhonebook />
      <Filter />
      <Section title="Contacts list">
        <ContactItem />
      </Section>
    </div>
  );
};

export default Contacts;
