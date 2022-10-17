import React, { useState, useContext, useEffect } from "react";
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

  const { addContact, current, clearCurrent } = contactContext;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

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
    addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div>
      {current ? (
        <Typography
          fontSize={18}
          sx={{
            margin: "0.5rem 0",
            padding: "1rem",
          }}
        >
          Edit Contact
        </Typography>
      ) : (
        <Typography
          fontSize={18}
          sx={{
            margin: "0.5rem 0",
            padding: "1rem",
          }}
        >
          Add Contact
        </Typography>
      )}

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
        value={contact.phone}
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
      {current ? (
        <Button type="submit" variant="outlined" fullWidth onClick={onSubmit}>
          Update Contact
        </Button>
      ) : (
        <Button type="submit" variant="outlined" fullWidth onClick={onSubmit}>
          Add Contact
        </Button>
      )}
      {current && (
        <Button type="submit" variant="outlined" fullWidth onClick={clearAll}>
          Clear
        </Button>
      )}
    </div>
  );
};

export default ContactForm;
