import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-K2M95RTN" />
      <GoogleAnalytics gaId="AW-18318655303" />
    </>
  );
}
