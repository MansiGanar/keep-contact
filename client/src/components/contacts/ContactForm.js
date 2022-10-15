import React, { useState, useContext } from "react";
import {
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  Button,
  Divider,
} from "@mui/material";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const [selectedValue, setSelectedValue] = useState("personal");

  const handleChange = (e) => {
    console.log(selectedValue);
    setSelectedValue(e.target.value);
  };
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };
  return (
    <div>
      <Typography
        fontSize={18}
        sx={{
          margin: "0.5rem 0",
          padding: "1rem",
        }}
      >
        Add Contact
      </Typography>
      <Divider />
      <TextField
        sx={{
          width: "90%",

          margin: "1rem 2rem",
        }}
        id="filled-basic"
        label="Name"
        variant="filled"
        name="name"
        value={contact.name}
        onChange={onChange}
      />
      <TextField
        sx={{
          width: "90%",
          margin: "1rem 2rem",
        }}
        id="filled-basic"
        label="Email"
        variant="filled"
        type="email"
        name="email"
        value={contact.email}
        onChange={onChange}
      />
      <TextField
        sx={{
          width: "90%",
          margin: "1rem 2rem",
        }}
        id="filled-basic"
        label="Phone"
        variant="filled"
        name="phone"
        value={contact.password}
        onChange={onChange}
      />
      <FormControlLabel
        sx={{
          margin: "1rem 2rem",
        }}
        label="Personal"
        control={
          <Radio
            checked={selectedValue === "personal"}
            onChange={handleChange}
            value="personal"
          />
        }
      />
      <FormControlLabel
        label="Professional"
        control={
          <Radio
            checked={selectedValue === "professional"}
            onChange={handleChange}
            value="professional"
          />
        }
      />
      <Button type="submit" variant="outlined" fullWidth onClick={onSubmit}>
        Add Contact
      </Button>
    </div>
  );
};

export default ContactForm;
