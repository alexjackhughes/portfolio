# Portfolio

This is the repo for [my personal website](https://alexhughes.io/).

It includes;

- 📄 A few pages
- 📬 Ability to subscribe to my newsletter
- 🔗 Links to the courses I offer
- 📝 My blog

### Getting Started

To run a development build using hot reloading, use:

`npm run dev`

To build and start a production version of the code, run:

```
npm run build
npm run start
```

### Deploy

To deploy using `now`, run the following commands:

```
npm i -g now
now login
now
now --prod # to overwrite later
```

### Tech Stack

For the curious, this is a TypeScript project built with Next and deployed on Now. It's also likely going to have an API by the time someone reads this, making it a full-stack application. Probably with Prisma and MongoDB on the backend.

I'm using StaticKit for the forms and email subscriptions, and Bulma for the styling (with a bit of elbow greese from myself).
