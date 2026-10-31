import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  // what's typed in the form right now
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // true when the typed name already exists in contacts
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // only add and clear the form when the name is new
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  // rechecks for a duplicate every time the name or the list changes
  useEffect(() => {
    const nameIsDuplicate = contacts.some((contact) => contact.name === name);
    setDuplicate(nameIsDuplicate);
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {/* only shows when the name is taken */}
          {duplicate ? " (Name Already Exists)" : ""}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
