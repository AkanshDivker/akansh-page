import { CssVarsProvider } from "@mui/joy/styles";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import theme from "../components/Theme";

const description =
  "Welcome to the personal website for Akansh Divker. Here you can find out a bit about me, my personal projects, and contact details.";
const title = "Akansh | Akansh Divker";

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{title}</title>
      </Head>
      <CssVarsProvider
        defaultMode="system"
        theme={theme}
        modeStorageKey="akansh-page_identify-system-mode"
        disableNestedContext
      >
        <Header title="Akansh" url="https://akansh.xyz" />
        <About />
        <Projects />
        <Footer />
      </CssVarsProvider>
    </React.Fragment>
  );
};

export default Index;
