import { NextPage } from "next";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";

interface Post {
  id: string;
  title: string;
  date: string;
  cover: string;
  blurb: string;
}

interface Props {
  posts: Post[];
}

const Blog: NextPage<Props> = ({ posts }) => (
  <>
    <div className="columns has-background-white">
      <div className="column is-half is-offset-one-quarter has-text-dark has-margin-small has-padding-medium">
        {posts.map(({ id, title, cover, blurb }) => (
          <Link href={`/blog/${id}`}>
            <div className="is-link has-text-centered">
              <img src={cover} className="is-cover" />
              <h1 className="title has-text-dark is-2">{title}</h1>
              <p className="has-text-grey is-size-5">{blurb}</p>
              <p className="has-text-grey is-size-5 is-transparent">
                {numberWithCommas(Math.floor(Math.random() * 1000 + 834))} views
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
);

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
