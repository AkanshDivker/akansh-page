import { getInitColorSchemeScript } from "@mui/joy/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html data-color-scheme="light">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7d67a4" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          {getInitColorSchemeScript({ defaultMode: "light" })}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
