import React from "react";
import { Box, Typography, Stack, Grid, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ContactItem = ({ contact }) => {
  return (
    <Box
      sx={{
        border: "0.1rem solid pink",
        margin: "0.5rem",
        padding: "1rem",
        background: "#FFD6EC",
      }}
    >
      <Grid container>
        <Grid item sm>
          <Typography>{contact.name}</Typography>
        </Grid>
        <Grid item>
          <Typography>
            {contact.type === "professional" ? (
              //   <FormControlLabel
              //     control={<Checkbox defaultChecked />}
              //     label="Professional"
              //   />
              <Typography
                sx={{
                  background: "#7FBCD2",
                  color: "white",
                  padding: "0.2rem",
                }}
              >
                {contact.type.toUpperCase()}
              </Typography>
            ) : (
              <Typography
                sx={{
                  background: "#9ADCFF",
                  color: "white",
                  padding: "0.2rem",
                }}
              >
                {contact.type.toUpperCase()}
              </Typography>
            )}
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item>{<EmailIcon />}</Grid>
        <Grid item>
          <Typography>{contact.email}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>{<LocalPhoneIcon />}</Grid>
        <Grid item>
          <Typography>{contact.phone}</Typography>
        </Grid>
      </Grid>
      <Stack spacing={2} direction="row">
        <Button variant="outlined">{<EditIcon />}Edit</Button>
        <Button variant="outlined" color="error">
          {<DeleteIcon />}Delete
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactItem;
