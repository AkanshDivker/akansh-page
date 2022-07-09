import { CssVarsProvider } from "@mui/joy/styles";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import theme from "../components/Theme";

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Akansh | Akansh Divker</title>
      </Head>
      <CssVarsProvider theme={theme}>
        <Header title="Akansh" url="https://akansh.xyz" />
        <About />
        <Projects />
      </CssVarsProvider>
    </React.Fragment>
  );
};

export default Index;
