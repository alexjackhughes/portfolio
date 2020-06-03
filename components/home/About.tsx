import Container from "../layout/Container";
import Blurb from "./Blurb";

export default function About() {
  return (
    <>
      <div className="hero is-dark is-fullheight">
        <div className="hero-body">
          <Container>
            <h2 className="title is-1 has-padding-bottom-medium">
              Who the devil am I?
            </h2>
            <p className="subtitle white">
              My name is Alexander Jack Hughes. But you can call me Alex.
            </p>
            <p className="subtitle white">
              To give you a quick history lesson; I've been building startups
              for the better part of a decade, and in between managed to get an
              MSc in Computer Science and write{" "}
              <a
                target="_blank"
                className="has-text-info"
                rel="noopener noreferrer"
                href="https://hackernoon.com/u/alexjackhughes"
              >
                a few things for Hackernoon
              </a>
              . I'm pretty comfortable with JavaScript, having built from
              scratch a number of production-grade web apps.
            </p>
            <p className="subtitle white">
              Tech stack? Mainly I work with React & GraphQL, using a good solid
              framework like Gatsby or Next.js.
            </p>
            <p className="subtitle white">
              But enough about me, how have you been?
            </p>
            <div className="has-margin-top-large">
              <div className="columns">
                <div className="column is-one-third">
                  <nav className="level is-mobile">
                    {icons.map((blurb, index) => (
                      <Blurb key={index} blurb={blurb} />
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="hero-bottom">
          <img
            src={require("../images/light.svg")}
            className="curve is-marginless is-paddingless flip-horizontal"
            alt="background-image"
          />
        </div>
      </div>
    </>
  );
}

const icons = [
  {
    icon: "fa-browser",
    heading: "web apps built",
    title: "20+",
    color: "has-text-info",
  },
  {
    icon: "fa-chart-line",
    heading: "of freelancers",
    title: "TOP 1%",
    color: "has-text-success",
  },
  {
    icon: "fad fa-sack-dollar",
    heading: "in revenue created",
    title: "1mil",
    color: "has-text-warning",
  },
];
