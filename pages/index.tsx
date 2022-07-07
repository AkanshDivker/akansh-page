import { CssVarsProvider } from "@mui/joy/styles";
import type { NextPage } from "next";
import Header from "../components/Header";

const Index: NextPage = () => {
  return (
    <CssVarsProvider>
      <Header />
    </CssVarsProvider>
  );
};

export default Index;
