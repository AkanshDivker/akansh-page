import GitHubIcon from "@mui/icons-material/GitHub";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        marginTop: 3,
      }}
    >
      <Typography
        level="display1"
        sx={{
          display: "flex",
          alignSelf: "center",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
      >
        {"Hi, I'm "}
        <Typography
          level="display1"
          color="primary"
          textColor="primary"
          sx={{
            alignSelf: "center",
            marginLeft: {
              xl: "10px",
              lg: "10px",
              md: "10px",
              sm: "-25px",
              xs: "-25px",
            },
          }}
        >
          {"Akansh."}
        </Typography>
      </Typography>

      <Typography level="h3" fontWeight="700" sx={{ marginTop: 3 }}>
        A Security Engineer.
      </Typography>

      <Typography
        level="body1"
        sx={{
          alignItems: "flex-start",
          maxWidth: 500,
          wordBreak: "break-word",
          marginTop: 3,
          paddingX: "15px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        vehicula arcu id nulla blandit, at luctus erat dictum. Phasellus dapibus
        sapien ut lacus congue, ac hendrerit diam aliquam. Sed molestie dictum
        neque eu molestie. Nulla rutrum ultricies nisi non tincidunt.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <IconButton
          component="a"
          variant="plain"
          target="_blank"
          rel="noopener"
          href="/resume.pdf"
        >
          <InsertDriveFileIcon />
        </IconButton>
        <IconButton
          component="a"
          variant="plain"
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/akanshdivker/"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          variant="plain"
          target="_blank"
          rel="noopener"
          href="https://github.com/AkanshDivker"
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default About;
