import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ background: "#FFD6EC", height: "3rem" }}>
      <Grid container>
        <Grid
          item
          sx={{
            padding: "0.7rem 0 0.7rem 1rem",
            color: "#CD104D",
            fontSize: 24,
          }}
        >
          <ContactsIcon />
        </Grid>
        <Grid item sm>
          <Typography
            sx={{ padding: "0.4rem", color: "#CD104D", fontSize: 24 }}
          >
            Keep Contact
          </Typography>
        </Grid>
        <Link to="/">
          <Grid
            item
            sx={{
              padding: "0.4rem",
              color: "#CD104D",
              fontSize: 18,
            }}
          >
            Home
          </Grid>
        </Link>
        <Link to="/about">
          <Grid item sx={{ padding: "0.4rem", color: "#CD104D", fontSize: 18 }}>
            About
          </Grid>
        </Link>
      </Grid>
    </Box>
  );
};

export default Navbar;
