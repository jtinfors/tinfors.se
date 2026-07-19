import { GoogleAnalytics } from "@next/third-parties/google";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        <GoogleAnalytics gaId="AW-18318655303" />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18318655303"
        ></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18318655303')`,
          }}
        />

        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_reCAPTCHA_site_key}`}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
