import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Button from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy/styles";
import type { NextPage } from "next";
import React from "react";

const ModeToggle: NextPage = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // return return <Button variant="outlined" color="neutral" sx={{ width: 120 }} />
    return null;
  }

  return (
    <Button
      role='menuitem'
      variant="soft"
    // TO-DO: Fix dark mode issue
    //onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </Button>
  );
};

export default ModeToggle;
