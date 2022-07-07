import Typography from "@mui/joy/Typography";
import type { NextPage } from "next";

const style = {
  about: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column" as "column", // Error fix
    marginTop: "3em",
  },
};

const About: NextPage = () => {
  return (
    <div style={style.about}>
      <Typography level="h1">
        Hi, I'm{" "}
        <Typography level="h1" color="primary" textColor="primary">
          Akansh.
        </Typography>
      </Typography>
    </div>
  );
};

export default About;
