import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ModeToggle from "../components/ModeToggle";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <CssVarsProvider>
      <ModeToggle />
      <Sheet
        sx={{
          maxWidth: 400,
          mx: 'auto', // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">Sign in to continue</Typography>
        </div>
    </Sheet>
    </CssVarsProvider>
  );
};

export default Index;
