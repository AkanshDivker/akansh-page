import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import type { NextPage } from "next";
import * as React from "react";

const Footer: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        marginBottom: "30px",
      }}
    >
      <Typography level="h6" sx={{ fontSize: "16px" }}>
        <Link>Created by Akansh Divker</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
