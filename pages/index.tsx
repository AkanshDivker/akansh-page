import { CssVarsProvider } from "@mui/joy/styles";
import type { NextPage } from "next";
import Header from "../components/Header";
import theme from "../components/Theme";

const Index: NextPage = () => {
  return (
    <CssVarsProvider theme={theme}>
      <Header />
    </CssVarsProvider>
  );
};

export default Index;
