import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import type { NextPage } from "next";
import * as React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  techList: Array<string>;
  chipColor: "primary" | "neutral" | "danger" | "neutral" | "success" | "warning" | undefined;
}

const ProjectCard: NextPage<ProjectCardProps> = (props) => {
  const { title, description, url, techList, chipColor } = props;

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        minWidth: "320px",
        maxWidth: "320px",
        gap: 2,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            {title}
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              target="_blank"
              rel="noopener"
              href={url}
              sx={{ color: "text.tertiary" }}
            >
              {description}
            </Link>
          </Typography>
          <Box>
            {techList.map((tech: string) => (
              <Chip
                variant="soft"
                color={chipColor}
                size="sm"
                key={tech}
                sx={{ pointerEvents: "none", marginRight: "10px" }}
              >
                {tech}
              </Chip>
            ))}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProjectCard;
