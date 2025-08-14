import React, { useState } from "react";

export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Replace with your backend/API (EmailJS, serverless, etc.)
    console.log("Contact form:", state);
    setSent(true);
  };

  return (
    <div className="section container">
      <h2>Contact</h2>
      {sent ? (
        <p className="success" role="status">Thanks! I’ll reply shortly.</p>
      ) : (
        <form className="form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" value={state.name} onChange={onChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={state.email} onChange={onChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={state.message} onChange={onChange} required />
          </label>
          <button className="btn primary" type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
