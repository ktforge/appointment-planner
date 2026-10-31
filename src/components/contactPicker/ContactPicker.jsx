import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      {/* empty value so nothing is picked by default */}
      <option value="">No Contact Selected</option>
      {contacts.map((contact) => (
        // names are unique (the contacts page blocks duplicates), so they work as keys
        <option key={contact} value={contact}>
          {contact}
        </option>
      ))}
    </select>
  );
};
