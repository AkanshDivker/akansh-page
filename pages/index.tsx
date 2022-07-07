import { CssVarsProvider } from "@mui/joy/styles";
import type { NextPage } from "next";
import About from "../components/About";
import Header from "../components/Header";
import theme from "../components/Theme";

const Index: NextPage = () => {
  return (
    <CssVarsProvider theme={theme}>
      <Header />
      <About />
    </CssVarsProvider>
  );
};

export default Index;
