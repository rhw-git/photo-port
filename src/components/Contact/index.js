import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // hook for validation
  const [errorMessage, setErrorMessage] = useState('');
  // hook
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  // deconstruct formState
  const { name, email, message } = formState;
  // event handler function
  function handleChange(event) {
    // user hook of validation to check email and name
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Please provide valid email');
      } else {
        if (!event.target.value.length) {
          setErrorMessage(`${event.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    }
    // use the other hook to recieve changes filled in contact form only when filled info are valid
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }
  // event handler to handle submit
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section>
      <h1 data-testid="contact">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultChecked={message}
            onBlur={handleChange}
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit" data-testid="button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
