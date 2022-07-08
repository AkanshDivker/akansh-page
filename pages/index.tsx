import { CssVarsProvider } from "@mui/joy/styles";
import type { NextPage } from "next";
import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import theme from "../components/Theme";

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <CssVarsProvider theme={theme}>
        <Header />
        <About />
      </CssVarsProvider>
    </React.Fragment>
  );
};

export default Index;
