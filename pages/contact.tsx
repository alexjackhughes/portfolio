import Head from "next/head";
import { useForm, ValidationError } from "@statickit/react";

import Contact from "../components/contact";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");

  return (
    <>
      <Head>
        <title>Contact me | Alex Jack Hughes</title>
        <meta
          name="description"
          content="If you're looking to build your next web app with someone you trust, or looking for a little guidance on your journey to becoming a developer - get in touch! I don't bite."
        />
      </Head>
      <Contact>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" />
          <input
            id="email"
            type="email"
            name="email"
            className="input has-margin-top-small has-margin-bottom-small"
            placeholder="johnny@cash.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className="textarea has-margin-bottom-medium"
            placeholder="Write me a message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          {state.succeeded && (
            <div className="notification is-primary is-light">
              Thanks for getting in touch! I'll be reply ASAP.
            </div>
          )}
          <button
            className="button is-rounded is-primary is-medium"
            type="submit"
            disabled={state.submitting}
          >
            <span className="icon is-medium">
              <i className="fad fa-paper-plane" />
            </span>
            <span className="has-text-weight-bold">Send message</span>
          </button>
        </form>
      </Contact>
    </>
  );
}
export default ContactForm;
