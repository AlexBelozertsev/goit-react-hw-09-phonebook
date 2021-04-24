import React from 'react';
import { useSelector } from 'react-redux';
import style from './Contacts.module.css';
import Contact from './Contact';
import { selectors } from '../../redux/contacts';

export default function Contacts() {
  const list = useSelector(selectors.getFilteredContact);

  return (
    <div className={style.contactsContainer}>
      <ul className={style.contactsList}>
        {list.length > 0 &&
          list.map(({ id, name, number }) => (
            <li key={id} className={style.contactItem}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
      </ul>
    </div>
  );
}
