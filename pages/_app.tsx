import * as React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import withGA from "next-ga";
import { StaticKitProvider } from "@statickit/react";

import Layout from "../components/layout/Layout";

import "../styles/styles.scss";
import "../node_modules/@fortawesome/fontawesome-pro/css/all.css";

const GA_TRACKING_ID = "UA-89055959-16";

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    const description =
      "Hi, I’m Alex Hughes! I'm a Full-Stack Engineer and builder of high-growth startups based in Bristol. Speciality? Typically I build serverless web apps in React, GraphQL, and TypeScript.";

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <html lang="en" />
          <title>React Engineer & Startup Founder | Alex Jack Hughes</title>
          <link rel="shortcut icon" href="https://alexhughes.io/favicon.ico" />
          <meta name="description" content={description} />
          <meta
            property="og:title"
            content="React Engineer & Startup Founder | Alex Jack Hughes"
          />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://alexhughes.io/" />
          <meta
            property="og:image"
            content="https://alexhughes.io/template.png"
          />
        </Head>
        <StaticKitProvider site="8f3036ece773">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StaticKitProvider>
      </>
    );
  }
}

export default withGA(GA_TRACKING_ID, Router)(MyApp);
