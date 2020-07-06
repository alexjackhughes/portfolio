import ReactRotatingText from "react-rotating-text";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <>
      <div className="hero is-medium is-fullheight is-white">
        <div className="hero-body">
          <Container>
            <h1 className="has-text-dark">Hi, I'm Alex!</h1>
            <div>
              <h2 className="has-text-grey">
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
        <div className="hero-bottom has-background-grey-lighter">
          <img
            src={require("../images/white.svg")}
            className="curve is-marginless is-paddingless flip-vertical"
            alt="background-image"
          />
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 5rem;
        }

        @media only screen and (max-width: 600px) {
          h1 {
            font-size: 3rem;
          }
        }

        h2 {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}

const myFeatures: string[] = [
  "startup founder",
  "Node engineer",
  "Hackernoon writer",
  "TypeScript superfan",
  "React developer",
  "coding mentor",
  "AWS guru",
  "Docker pro",
];
