import React, { Component } from 'react';

import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name'
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Invalid phone number'
    )
    .required('Phone number is required'),
});

class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onAddContact(values.name, values.number);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <Form className={styles['contact-form']}>
          <label className={styles['contact-label']}>
            Name:
            <Field
              className={styles['contact-input']}
              type="text"
              placeholder="Enter name"
              name="name"
              required
              minLength="3"
              maxLength="30"
            />
            <ErrorMessage
              className={styles['error-message']}
              name="name"
              component="div"
            />
          </label>
          <label className={styles['contact-label']}>
            Number:
            <Field
              className={styles['contact-input']}
              type="tel"
              placeholder="Enter phone number"
              name="number"
              required
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              minLength="10"
              maxLength="13"
            />
            <ErrorMessage
              className={styles['error-message']}
              name="number"
              component="div"
            />
          </label>
          <button className={styles['contact-btn']} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}

export default ContactForm;
