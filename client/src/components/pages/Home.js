import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
  return (
    <Box>
      <Grid container>
        <Grid item sm={6} padding={"1rem"}>
          <Typography sx={{ background: "#EEEEEE" }}>
            <ContactForm />
          </Typography>
        </Grid>
        <Grid item sm={6} padding={"1rem"}>
          <Contacts />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
