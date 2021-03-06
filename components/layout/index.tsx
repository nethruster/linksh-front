import generateCoreTheme from "@core/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme, ThemeProvider } from "@material-ui/core/styles";
import "@shared/styles/index.scss";
import React from "react";
import { DocumentContent } from "./document-content";
import { DocumentFooter } from "./document-footer";
import { DocumentHead } from "./document-head";
import { DocumentHeader } from "./document-header";
import "./styles.scss";

export const Layout = (props: { children: React.ReactNode }) => {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersDarkMode = false;
  const coreTheme: Theme = generateCoreTheme(prefersDarkMode);
  const theme: Theme = React.useMemo(() => coreTheme, [prefersDarkMode]);

  return (
    <div className="layout">
      <DocumentHead />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DocumentHeader />
        <DocumentContent>{props.children}</DocumentContent>
        <DocumentFooter />
      </ThemeProvider>
    </div>
  );
};
