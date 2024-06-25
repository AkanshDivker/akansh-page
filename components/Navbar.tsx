import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import type { NextPage } from "next";
import React from "react";
import ModeToggle from "./ModeToggle";

const Navbar: NextPage = () => {
  return (
    <Box
      sx={{
        minHeight: 190,
        justifyContent: "space-around",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          "--List-radius": "8px",
          "--List-padding": "4px",
          "--List-gap": "8px",
        }}
      >
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#about">
            <Typography level="title-md">About</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#projects">
            <Typography level="title-md">Projects</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ModeToggle />
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;
