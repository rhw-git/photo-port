import React, { useState } from 'react';

function ContactForm() {
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
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }
  // event handler to handle submit
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultChecked={message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
