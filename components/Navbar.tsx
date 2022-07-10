import ClickAwayListener from "@mui/base/ClickAwayListener";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import type { NextPage } from "next";
import React from "react";
import ModeToggle from "./ModeToggle";

const ToolsMenu: NextPage = () => {
  const [anchorEl, setAnchorEl] = React.useState<
    EventTarget & HTMLAnchorElement
  >();
  const open = Boolean(anchorEl);

  const onFocus = (event: React.FocusEvent<HTMLAnchorElement, Element>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMouseEnter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(undefined)}>
      <Box onMouseLeave={() => setAnchorEl(undefined)}>
        <ListItemButton
          aria-haspopup
          aria-label="Tools"
          aria-expanded={open ? "true" : "false"}
          role="menuitem"
          onFocus={onFocus}
          onMouseEnter={onMouseEnter}
          sx={(theme) => ({
            ...(open && theme.variants.plainHover.neutral),
          })}
        >
          <Typography level="h6">Tools</Typography>
          <KeyboardArrowDown />
        </ListItemButton>
        <PopperUnstyled
          open={open}
          anchorEl={anchorEl}
          disablePortal
          keepMounted
        >
          <Sheet
            variant="outlined"
            sx={{ my: 2, boxShadow: "md", borderRadius: "sm", minWidth: 180 }}
          >
            <List
              role="menu"
              aria-label="Tools"
              sx={{
                "--List-radius": "8px",
                "--List-padding": "4px",
              }}
            >
              <ListItem role="none">
                <ListItemButton
                  role="menuitem"
                  aria-label="ATLAS"
                  href="#"
                  disabled
                >
                  <ListItemContent>ATLAS</ListItemContent>
                </ListItemButton>
              </ListItem>
              <ListItem role="none">
                <ListItemButton
                  role="menuitem"
                  aria-label="PolyEngine"
                  href="#"
                  disabled
                >
                  PolyEngine
                </ListItemButton>
              </ListItem>
            </List>
          </Sheet>
        </PopperUnstyled>
      </Box>
    </ClickAwayListener>
  );
};

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
        row
        sx={{
          "--List-radius": "8px",
          "--List-padding": "4px",
          "--List-gap": "8px",
        }}
      >
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            aria-label="About"
            component="a"
            href="#about"
          >
            <Typography level="h6">About</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            aria-label="Projects"
            component="a"
            href="#projects"
          >
            <Typography level="h6">Projects</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ToolsMenu />
        </ListItem>
        <ListItem role="none">
          <ModeToggle />
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;
