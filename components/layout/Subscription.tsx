import React from "react";
import { useForm, ValidationError } from "@statickit/react";

export default function Subscription() {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return (
      <div className="box is-between-sections">
        <p className="has-text-dark has-text-centered">Amazing, thank you!</p>
        <p className="has-text-dark has-text-centered">🙏</p>
      </div>
    );
  }

  return (
    <form
      className="box is-between-sections has-text-centered"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email"
        className="input is-medium has-no-input-styling"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <p className="has-text-grey has-margin-top-small">
        Never spam. I'm just one bloke, how much spam can I even send you?
      </p>
      <button
        type="submit"
        className="button is-primary is-rounded has-text-weight-bold is-medium has-margin-top-medium has-margin-bottom-medium"
        disabled={state.submitting}
      >
        <span>Get my secret gift</span>
        <span className="icon is-small">
          <i className="fad fa-gift" />
        </span>
      </button>
    </form>
  );
}
