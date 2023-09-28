"use client";

import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: "", email: "", body: "" });
  const [sending, setSending] = useState(false);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const contactForm = event.currentTarget;

      if (!contactForm.checkValidity()) {
        event.stopPropagation();
      }
      setSending(true);
      const response = await axios.post("/api/contact-us", formState);
      console.log(response.data);
      if (response.data === "Success") {
        setFormState({
          ...formState,
          body: "Message sent successfully, we will contact you soon",
        });
      }
      if (response.data === "Error") {
        setFormState({
          ...formState,
          body: "Message not sent!!!",
        });
      }
      setSending(false);
    } catch (error) {
      console.log(error);
      setFormState({
        ...formState,
        body: "Check console for error",
      });
      setSending(false);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          For support and partnerships, reach out!{" "}
        </h2>
      </div>

      <input
        className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-base-300 border-base-300"
        type="text"
        placeholder="Full Name"
        required
        value={formState.name}
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
      />
      <input
        className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-base-300 border-base-300"
        type="email"
        placeholder="abc@gmail.com"
        required
        value={formState.email}
        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
      />
      <textarea
        rows={4}
        placeholder="Write a message..."
        required
        value={formState.body}
        onChange={(e) => setFormState({ ...formState, body: e.target.value })}
        className="block w-full px-4 mb-4 leading-tight border rounded py-7 bg-base-300 "
      ></textarea>
      <button
        type="submit"
        disabled={sending}
        className="w-full py-4 text-white text-sm font-bold leading-normal transition-all duration-300 rounded-md bg-primary hover:bg-primary-focus"
      >
        {sending ? "Sending Message..." : `Send Message`}
      </button>
    </form>
  );
};

export default ContactForm;
