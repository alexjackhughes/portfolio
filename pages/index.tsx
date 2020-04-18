import { NextPage } from "next";
import Hero from "../components/home/Hero";
import About from "../components/home/About";

const Home: NextPage = () => (
  <>
    <Hero />
    <About />
  </>
);

export default Home;
