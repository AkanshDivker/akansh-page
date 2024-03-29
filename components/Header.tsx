import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import type { NextPage } from "next";
import Navbar from "./Navbar";

interface HeaderProps {
  title: string;
  url: string;
}

const Header: NextPage<HeaderProps> = (props) => {
  const { title, url } = props;

  return (
    <header>
      <Box
        sx={{
          height: "8em",
          display: "flex",
          margin: "0 auto",
          marginTop: "25px",
          width: "100%",
          justifyContent: "space-around",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Typography level="h3">
          <Link
            color="primary"
            level="h3"
            underline="none"
            variant="plain"
            href={url}
            sx={{
              paddingTop: "8px",
            }}
          >
            {title}
          </Link>
        </Typography>
        <Navbar />
      </Box>
    </header>
  );
};

export default Header;
