import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import type { NextPage } from "next";
import { header } from "../resources/data";
import Navbar from "./Navbar";

const headerStyle = {
  height: "8em",
  display: "flex",
  margin: "0 auto",
  marginTop: "25px",
  width: "70%",
  justifyContent: "space-between",
};

const Header: NextPage = () => {
  const { title, url } = header;

  return (
    <header style={headerStyle}>
      <Typography level="h3">
        <Link
          color="primary"
          disabled={false}
          level="h3"
          underline="none"
          variant="plain"
          href={url}
        >
          {title}
        </Link>
      </Typography>
      <Navbar />
    </header>
  );
};

export default Header;
