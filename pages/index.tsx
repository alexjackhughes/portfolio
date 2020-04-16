import { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => (
  <Layout>
    <div className="buttons">
      <a className="button is-primary">
        <strong>Sign up</strong>
      </a>
      <a className="button is-light">Log in</a>
      <a className="button is-primary">
        <span className="icon">
          <i className="fab fa-github" />
        </span>
        <span>GitHub</span>
      </a>
      <a className="button is-primary">
        <span className="icon">
          <i className="fab fa-twitter"></i>
        </span>
        <span>Twitter</span>
      </a>
    </div>
  </Layout>
);

export default Home;
