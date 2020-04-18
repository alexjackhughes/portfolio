import Container from "../layout/Container";

export default function Contact({ children }) {
  return (
    <>
      <div className="hero is-medium is-fullheight">
        <div className="hero-body">
          <Container>
            <h1 className="title is-1 has-text-dark" id="hero-title">
              Let's talk
            </h1>
            <h3 className="subtitle has-text-dark is-transparent">
              If you ever want just want to ask me a question, or get in touch -
              send me an email below. I'll usually respond instantly because I'm
              sad like that.
            </h3>
            {children}
          </Container>
        </div>
      </div>
    </>
  );
}
