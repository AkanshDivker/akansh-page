import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import type { NextPage } from "next";
import * as React from "react";
import ProjectCard from "./ProjectCard";

const Projects: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        marginTop: 5,
      }}
    >
      <div id="projects" />
      <Typography
        level="h3"
        fontWeight="700"
        sx={{ marginTop: 3, marginBottom: 3 }}
      >
        PROJECTS
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
            xl: "400px",
            lg: "400px",
            md: "600px",
            sm: "1200px",
            xs: "1200px",
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
          title="ATLAS"
          url="https://atlas.akansh.xyz"
          description="An automated system for analyzing binary files and determining common threat parameters, such as the malware family and potentially malicious URLs."
          techList={["Python", "TypeScript", "Next.js", "MongoDB"]}
          chipColor="primary"
        />

        <ProjectCard
          title="Identity"
          url="#"
          description="A SaaS prototype app to provide a solution to secure and universal passwordless authentication on the web."
          techList={["JavaScript", "Node.js", "React.js", "Kubernetes"]}
          chipColor="primary"
        />

        <ProjectCard
          title="PolyEngine"
          url="https://github.com/AkanshDivker/polyengine"
          description="A Python application to apply code encryption, obfuscation, and polymorphism on compile time for C/C++ programs."
          techList={["Python", "C", "C++", "ctags"]}
          chipColor="primary"
        />

        <ProjectCard
          title="GitScrape"
          url="https://github.com/AkanshDivker/GitScrape"
          description="A flexible and efficient Python program to query for GitHub repositories, scrape relevant data, and then clone them for later use."
          techList={["Python", "Git"]}
          chipColor="primary"
        />

        <ProjectCard
          title="Simple-ECS"
          url="https://github.com/AkanshDivker/Simple-ECS"
          description="An example using the core features of the Entity Component System (ECS) and the Data Oriented Tech Stack (DOTS) in Unity, inspired by Roll-a-ball."
          techList={["C#", "Unity", "DOTS", "ECS"]}
          chipColor="primary"
        />
        
        <ProjectCard
          title="Akansh-Page"
          url="https://github.com/AkanshDivker/akansh-page"
          description="A simple and elegant personal portfolio website. This project contains the source code for my personal website, akansh.xyz."
          techList={["TypeScript", "HTML", "CSS", "Next.js"]}
          chipColor="primary"
        />
      </Box>
    </Box>
  );
};

export default Projects;
