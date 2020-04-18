import ReactRotatingText from "react-rotating-text";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <div className="hero is-medium is-fullheight has-bg-image">
      <div className="hero-body">
        <Container>
          <h1 className="has-text-dark" id="hero-title">
            Hi, I'm Alex!
          </h1>
          <div>
            <h2 className="has-text-grey" id="hero-tagline">
              I'm a{" "}
              <ReactRotatingText
                items={myFeatures}
                className="has-text-primary"
              />
              .
            </h2>
          </div>
        </Container>
      </div>
      <div className="hero-bottom">
        <img
          src={require("../images/dark.svg")}
          className="curve is-marginless is-paddingless"
        />
      </div>
    </div>
  );
}

const myFeatures: string[] = [
  "startup founder",
  "Node back-end engineer",
  "TypeScript aficionado",
  "React front-end developer",
  "coding mentor",
  "fiddler of AWS settings",
  "builder of docker images",
];
