import React from 'react';

import styles from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={styles['contact-list-wrapper']}>
    <ul className={styles['contact-list']}>
      {contacts.map(contact => (
        <li className={styles['contact-item']} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={styles['contact-btn']}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
