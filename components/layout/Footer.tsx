import Link from "next/link";

import Subscription from "./Subscription";

export default function Footer() {
  const date = new Date();

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="has-padding-small has-text-centered is-white">
              <h2 className="title is-1 has-text-dark has-padding-bottom-medium">
                What's next?
              </h2>
              <p className="subtitle has-text-grey">
                A little less than a decade ago I quit my job, spent my last
                £100 on tinned food, and began freelancing full-time with zero
                clients. Jump forward a few years and I had worked my way into
                the top 1% of freelancers on{" "}
                <a href="https://www.peopleperhour.com/freelancer/writing/alex-hughes-creative-director-mwmzaa">
                  peopleperhour.com
                </a>
                .
              </p>
              <p className="subtitle has-text-grey">
                How? Well right now I'm in the middle of writing a book about
                exactly that; documenting everything from how I got my first
                client to how to build a website with no experience.
              </p>
              <p className="subtitle has-text-grey has-padding-bottom-medium">
                It still needs a bit of polish, which is why I've decided to
                release it chapter by chapter to everyone who wants it - just
                subscribe below and I'll add you to the list!
              </p>
              <Subscription />
            </div>
          </div>
        </div>
      </div>
      <img
        src={require("../images/dark.svg")}
        className="curve is-marginless is-paddingless"
        alt="background-image"
        style={{ marginBottom: "-1rem !important" }}
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
        <style jsx>{`
          .footer-icon {
            opacity: 0.4;
            cursor: pointer;
          }

          .footer-icon:hover {
            transition: opacity 300ms;
            opacity: 1;
          }
        `}</style>
      </footer>
    </>
  );
}
