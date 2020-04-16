import * as React from "react";

import App from "next/app";
import Head from "next/head";
import { StaticKitProvider } from "@statickit/react";

import "../styles/styles.scss";
import "../node_modules/@fortawesome/fontawesome-pro/css/all.css";

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Portfolios</title>
        </Head>

        <StaticKitProvider site="8f3036ece773">
          <Component {...pageProps} />
        </StaticKitProvider>
      </>
    );
  }
}
