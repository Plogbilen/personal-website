import { ReactElement } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
