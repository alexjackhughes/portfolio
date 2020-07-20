import { NextPage } from "next";
import Head from "next/head";
import { loadStripe } from "@stripe/stripe-js";

const config = {
  test: {
    key:
      "pk_test_51H6zbVKpphFwwIBzXkRhSKC4FnD65KUpHWYZA4uIJ3nGy6rLNRsPRAAmLR9eNXdrwFgtiOAsVLF5yRUWs5rmUXhB00AwDpf7EB",
    product: "price_1H70cuKpphFwwIBz5wXDFuVA",
  },
  prod: {
    key:
      "pk_live_51H6zbVKpphFwwIBzenkj2d0tBeolmhjINYfnVlFVv251SeW773340vwSuVheZFFP8b5KwJxgNZUApbQJETgTFCiv00e6cs6mtD",
    product: "price_1H6zjuKpphFwwIBzNAkd9ZMv",
  },
};

const stripePromise = loadStripe(config.prod.key);

const handleClick = async (event) => {
  // When the customer clicks on the button, redirect them to Checkout.
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    lineItems: [
      // Replace with the ID of your price
      { price: config.prod.product, quantity: 1 },
    ],
    mode: "subscription",
    successUrl: "https://alexhughes.io/subscribe",
    cancelUrl: "https://alexhughes.io/subscribe",
  });
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `error.message`.
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WordPress+</title>
        <meta
          name="description"
          content="Upgrade your WordPress Hosting subscription"
        />
      </Head>
      <div className="columns has-background-white has-padding-bottom-giant has-padding-top-large">
        <div className="column is-half is-offset-one-quarter has-text-dark has-margin-small has-padding-medium">
          <div className="has-text-centered is-white">
            <h2 className="title is-1 has-text-dark">
              Manage Your Subscription
            </h2>
            <p className="subtitle has-text-grey">
              Here you can update and manage your WordPress Hosting
              subscription.
            </p>
            <button
              className="button is-primary is-rounded has-text-weight-bold is-medium has-margin-top-medium has-margin-bottom-medium"
              onClick={handleClick}
            >
              Manage Subscription
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
