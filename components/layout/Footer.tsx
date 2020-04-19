import Link from "next/link";

import Subscription from "./Subscription";

export default function Footer() {
  const date = new Date();

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="has-padding-small has-text-centered is-white">
              <h2 className="title is-1 has-text-dark">What's next?</h2>
              <p className="subtitle has-text-grey">
                Well future friend, I'm playing around with running a monthly
                newsletter.
              </p>
              <p className="subtitle has-text-grey">
                Another startup newsletter, really? Yep really. And to show you
                how super serious I am, I'll even send you a free secret gift
                when you sign up.
              </p>
              <Subscription />
            </div>
          </div>
        </div>
      </div>
      <img
        src={require("../images/dark.svg")}
        className="curve is-marginless is-paddingless"
      />
      <footer className="footer is-primary">
        <div className="content has-text-centered">
          <p>
            <span className="is-transparent">Built with </span>
            <i className="fad fa-heart-circle has-text-danger" />
          </p>
          <p className="is-transparent">
            Alexander Jack Hughes © {date.getFullYear()}
          </p>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-one-third is-offset-one-third has-text-centered">
              <span className="icon is-large has-margin-small">
                <a
                  href="https://twitter.com/alexjackhughes"
                  target="_blank"
                  rel="noopener"
                  className="has-text-primary"
                >
                  <i className="fa-2x fab fa-twitter footer-icon" />
                </a>
              </span>
              <span className="icon is-large has-margin-small">
                <a
                  href="https://github.com/alexjackhughes"
                  target="_blank"
                  rel="noopener"
                  className="has-text-primary"
                >
                  <i className="fa-2x fab fa-github footer-icon" />
                </a>
              </span>
              <span className="icon is-large has-margin-small">
                <a
                  href="https://www.linkedin.com/in/alexjackhughes/"
                  target="_blank"
                  rel="noopener"
                  className="has-text-primary"
                >
                  <i className="fa-2x fab fa-linkedin-in footer-icon" />
                </a>
              </span>
              <span className="icon is-large has-margin-small">
                <a
                  href="https://angel.co/u/alexjackhughes"
                  target="_blank"
                  rel="noopener"
                  className="has-text-primary"
                >
                  <i className="fa-2x fab fa-angellist footer-icon" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
