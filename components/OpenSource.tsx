import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import type { NextPage } from "next";
import * as React from "react";
import ProjectCard from "./ProjectCard";
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';


const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary,
  maxWidth: '700px',
}));

const OpenSource: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
      }}
    >
      <div id="projects" />
      <Typography
        level="h3"
        fontWeight="700"
        sx={{ marginTop: 3, marginBottom: 3 }}
      >
        OPEN SOURCE CONTRIBUTIONS
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: {
            xl: "1120px",
            lg: "1120px",
            md: "800px",
            sm: "400px",
            xs: "400px",
          },
          height: {
            xl: "320px",
            lg: "320px",
            md: "480px",
            sm: "500px",
            xs: "500px",
          },
          flexWrap: "wrap",
          justifyContent: {
            md: "space-between",
            sm: "center",
            xs: "center",
          },
          alignContent: "space-between",
          marginBottom: "100px",
        }}
      >
        <ProjectCard
          title="HelloWord-Keyboard"
          url="https://github.com/peng-zhihui/HelloWord-Keyboard/pull/144/commits/6b5bb481d87485ee292992292bd9b233c85a33a3"
          description="Applied patch for critical buffer overflow vulnerability (CVE-2021-32020)."
          techList={["Critical", "CWE-119", "Security Vulnerabilty Fix"]}
          chipColor="danger"
        />
        <ProjectCard
          title="IronPython2"
          url="https://github.com/IronLanguages/ironpython2/pull/827/commits/848e14990ea2ee230481202ff50bf0cb880160d8"
          description="Applied patch for critical command injection vulnerability (CVE-2015-20107)."
          techList={["Critical", "CWE-77", "Security Vulnerabilty Fix"]}
          chipColor="danger"
        />
        <ProjectCard
          title="lk (littlekernel)"
          url="https://github.com/littlekernel/lk/pull/365/commits/9b1cd1020a2f1c1fa0dc0c80bb1071b2e45e6009"
          description="Applied patch for moderate severity vulnerability (CVE-2004-0230)."
          techList={["Moderate", "CWE-331", "Security Vulnerabilty Fix"]}
          chipColor="warning"
        />
        <ProjectCard
          title="WebAuthn"
          url="https://github.com/flutter-institute/webauthn/pull/2/commits/767f80f5bf0357ca91a951b2eb4fbf2f0c6885cc"
          description="Fixed fatal dependency error in Flutter WebAuthn codebase in Dart."
          techList={["Fatal Error", "Bug Fix"]}
          chipColor="info"
        />
      </Box>
    </Box>
  );
};

export default OpenSource;
