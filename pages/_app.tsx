import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
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

MyApp.getInitialProps = async (ctx: AppContext) => {
  
  const cookies = ctx.ctx.req? ()
  return {

  };
};

export default MyApp;
