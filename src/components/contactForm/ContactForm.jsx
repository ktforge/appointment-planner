import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Contact Name"
        required
      />
      {/* us numbers: 937-555-1234, (937) 555-1234, 937.555.1234, or 9375551234 */}
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="\(?[0-9]{3}\)?[\-. ]?[0-9]{3}[\-. ]?[0-9]{4}"
        title="10 digit US phone number, like 937-555-1234"
        placeholder="Contact Phone (###-###-####)"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Contact Email"
        required
      />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
