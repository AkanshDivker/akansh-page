import GitHubIcon from "@mui/icons-material/GitHub";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
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
      <div id="about" />
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
          maxWidth: 650,
          wordBreak: "break-word",
          marginTop: 3,
          paddingX: "15px",
        }}
      >
        Originally from Toronto &#x1F4CD;&#x1F1E8;&#x1F1E6;, I recently
        graduated from{" "}
        <Link target="_blank" rel="noopener" href="https://korea.edu/">
          Korea University
        </Link>{" "}
        &#x1F393;&#x1F1F0;&#x1F1F7; with my Bachelor of Science in Computer
        Science and Engineering &#x1F4BB;. Previously, I have conducted security
        research at the{" "}
        <Link target="_blank" rel="noopener" href="https://ccs.korea.ac.kr/">
          Computer {" & "} Communication Security Lab
        </Link>{" "}
        &#x1F4A1;. Having a strong passion for computer and software security,
        most of my projects revolve around providing better security tooling,
        insight, or vulnerability management. In addition, I enjoy skiing
        &#x26F7;, photography &#x1F4F7;, travelling &#x2708;, and dabbling in
        game development &#x1F3AE; in my free time.
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
          aria-label="Resume"
          target="_blank"
          rel="noopener"
          href="/resume.pdf"
        >
          <InsertDriveFileIcon />
        </IconButton>
        <IconButton
          component="a"
          variant="plain"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/akanshdivker/"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          variant="plain"
          aria-label="GitHub"
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
