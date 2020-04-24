import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { Posts } from "../lib/Post";
import { getSortedPostsData } from "../lib/posts";
import Categories from "../components/Categories";
import PageViews from "../components/PageViews";

interface Props {
  posts: Posts;
}

const Blog: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Blog | Alex Jack Hughes</title>
      <meta
        name="description"
        content="Check out my blog if you'd like to know about coding, and becoming a more experience developer - from Junior to Senior!"
      />
    </Head>
    <div className="columns has-background-white">
      <div className="column is-half is-offset-one-quarter has-text-dark has-margin-small has-padding-medium">
        {posts.map(({ id, title, blurb, categories, views }) => (
          <Link href={`/blog/${id}`} key={id}>
            <div className="is-link has-text-centered has-margin-bottom-large">
              <img
                src={`/images/${id}.jpg`}
                className="is-cover"
                alt={`${title} cover image`}
              />
              <h1 className="title has-text-dark is-2">{title}</h1>
              <p className="has-text-grey is-size-5">{blurb}</p>
              <Categories categories={categories} />
              <PageViews views={views} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
);

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
