import Container from "../layout/Container";

export default function Contact({ children }) {
  return (
    <>
      <div className="hero is-medium is-dark is-fullheight">
        <div className="hero-body">
          <Container>
            <h1 className="title is-1 has-text-white" id="hero-title">
              Contact me
            </h1>
            <p className="subtitle has-text-grey">
              If you ever want just want to ask me a question, or get in touch -
              send me an email below. I'll usually respond instantly because I'm
              sad like that.
            </p>
            {children}
          </Container>
        </div>
        <div className="hero-bottom">
          <img
            src={require("../images/light.svg")}
            className="curve is-marginless is-paddingless flip-horizontal"
          />
        </div>
      </div>
    </>
  );
}
