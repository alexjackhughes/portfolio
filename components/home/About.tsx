import Container from "../layout/Container";
import Blurb from "./Blurb";

export default function About() {
  return (
    <>
      <div className="hero has-background-white-ter is-fullheight">
        <div className="hero-body">
          <Container>
            <h2 className="title is-1 has-padding-bottom-medium has-text-dark	">
              Who am I?
            </h2>
            <p className="subtitle has-text-grey">
              My name is Alexander Jack Hughes. But you can call me Alex.
            </p>
            <p className="subtitle has-text-grey">
              I'm a full-stack engineer and builder of high-growth startups. To
              give you a quick history lesson; I've been coding for the better
              part of a decade, whilst achieving an MSc in Computer Science and
              writing{" "}
              <a
                target="_blank"
                className="has-text-info"
                rel="noopener noreferrer"
                href="https://hackernoon.com/u/alexjackhughes"
              >
                a few things for Hackernoon
              </a>
              .
            </p>
            <p className="subtitle has-text-grey">
              I can name drop if you'd like?
            </p>
            <p className="subtitle has-text-grey">
              Right now, I'm bringing transparency to your money at Tumelo.
              Before that, I was the 2nd dev hire at Huckletree (one of Europe's
              fastest growing workspaces) and designed the UI/UX for UpdraftPlus
              - which, with more than 3 million downloads is one of the most
              downloaded plugins on WordPress.
            </p>
            <p className="subtitle has-text-grey">
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
    icon: "fad fa-calendar-star",
    heading: "years freelancing",
    title: "5+",
    color: "has-text-danger",
  },
];
