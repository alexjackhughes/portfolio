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
        <div className="hero-bottom">
          <img
            src={require("../images/dark.svg")}
            className="curve is-marginless is-paddingless"
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
  "Node back-end engineer",
  "TypeScript superfan",
  "React front-end developer",
  "coding mentor",
  "dabbler in AWS settings",
  "builder of docker images",
];
