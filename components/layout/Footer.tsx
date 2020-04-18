import Subscription from "./Subscription";

export default function Footer() {
  const date = new Date();

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="has-padding-small">
              <h2 className="title is-1 has-text-dark">What next?</h2>
              <p className="subtitle has-text-grey">
                Well future friend, I'm playing around with running a monthly
                newsletter.
              </p>
              <p className="subtitle has-text-grey">
                I have all this knowledge of what it's like to go from
                freelancing to being a senior software engineer, and I just
                wanted to give something back.
              </p>
              <p className="subtitle has-text-grey">
                Another developer newsletter, really? Yep really. And to show
                you how super serious I am, I'll even send you a free secret
                gift when you sign up.
              </p>
            </div>
          </div>
          <div className="column">
            <Subscription />
          </div>
        </div>
      </div>
      <img
        src={require("../images/dark.svg")}
        className="curve is-marginless is-paddingless"
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
      </footer>
    </>
  );
}
