import React, { Component } from 'react';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    if (contacts.length === 0) {
      return <p>No contacts found</p>;
    }

    return (
      <div className={styles.contactListWrapper}>
        <table className={styles.contactTable}>
          <thead className={styles.contactTableHead}>
            <tr>
              <th>Name</th>
              <th>Phone number</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className={styles.contactTableBody}>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name} :</td>
                <td>{contact.number}</td>
                <td>
                  <button
                    className={styles.DelBtn}
                    onClick={() => onDeleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
