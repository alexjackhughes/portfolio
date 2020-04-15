import { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => (
  <Layout>
    <div className="buttons">
      <a className="button is-primary">
        <strong>Sign up</strong>
      </a>
      <a className="button is-light">Log in</a>
    </div>
  </Layout>
);

export default Home;
