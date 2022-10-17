import { Typography } from "@mui/material";
import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;
  return (
    <div>
      {contacts.map((contact) => (
        <Typography key={contact.id}>
          <ContactItem key={contact.id} contact={contact} />
        </Typography>
      ))}
    </div>
  );
};

export default Contacts;
