import { NextPage } from "next";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Head from "next/head";

const Home: NextPage = () => (
  <>
    <Head>
      <title>React Engineer & Startup Founder | Alex Jack Hughes</title>
      <meta
        name="description"
        content="Hi, I’m Alex Hughes! I'm a Full-Stack Engineer and builder of high-growth startups based in Bristol. Speciality? Typically I build serverless web apps in React, GraphQL, and TypeScript."
      />
    </Head>
    <Hero />
    <About />
  </>
);

export default Home;
