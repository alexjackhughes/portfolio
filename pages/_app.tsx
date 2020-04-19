import * as React from "react";
import App from "next/app";
import Head from "next/head";

import { StaticKitProvider } from "@statickit/react";

import Layout from "../components/layout/Layout";

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
          <title>React Engineer & Startup Founder | Alex Jack Hughes</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta
            name="description"
            content="Hi, I’m Alex Hughes! I'm a Full-Stack Engineer and builder of high-growth startups based in Bristol. Speciality? Typically I build serverless web apps in React, GraphQL, and TypeScript."
          ></meta>
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
