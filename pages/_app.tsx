import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { customTheme, darkTheme, lightTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
