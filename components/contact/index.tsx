import Container from "../layout/Container";

export default function Contact({ children }) {
  return (
    <>
      <div className="hero is-medium is-fullheight is-white">
        <div className="hero-body">
          <Container>
            <h1 className="title is-1 has-text-dark" id="hero-title">
              Contact me
            </h1>
            <p className="subtitle has-text-grey">
              If you ever want to just want to ask me a question about building
              your next web app, or would like some mentoring as you begin your
              journey coding - message me!
            </p>
            <p className="subtitle has-text-grey">
              I'll usually respond instantly because I'm sad like that.
            </p>
            {children}
          </Container>
        </div>
      </div>
    </>
  );
}
