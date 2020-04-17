import ReactRotatingText from "react-rotating-text";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <div className="hero is-medium is-fullheight">
      <div className="hero-body">
        <Container>
          <h1 className="title" id="hero-title">
            Hi, I'm Alex!
          </h1>
          <div>
            <h2 className="subtitle" id="hero-tagline">
              I'm a{" "}
              <ReactRotatingText items={items} className="has-text-primary" />.
            </h2>
          </div>
        </Container>
      </div>
      <div className="hero-bottom"></div>
    </div>
  );
}

const items: string[] = [
  "startup founder",
  "Node back-end engineer",
  "TypeScript aficionado",
  "React front-end developer",
  "AWS-certified architect",
  "coding mentor",
];
