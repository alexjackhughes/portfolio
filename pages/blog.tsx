import { NextPage } from "next";
import Link from "next/link";

import { getSortedPostsData, getAllPostIds } from "../lib/posts";

interface Post {
  id: string;
  title: string;
  date: string;
  blurb: string;
  categories: string[];
}

interface Props {
  posts: Post[];
}

const Blog: NextPage<Props> = ({ posts }) => (
  <>
    <div className="columns has-background-white">
      <div className="column is-half is-offset-one-quarter has-text-dark has-margin-small has-padding-medium">
        {posts.map(({ id, title, blurb, categories }) => (
          <Link href={`/blog/${id}`} key={id}>
            <div className="is-link has-text-centered has-margin-bottom-large">
              <img src={`/images/${id}.jpg`} className="is-cover" />
              <h1 className="title has-text-dark is-2">{title}</h1>
              <p className="has-text-grey is-size-5">{blurb}</p>
              <div className="tags are-medium">
                {categories.map((category) => (
                  <span className="tag is-medium is-grey has-text-grey has-text-weight-bold">
                    {category.toUpperCase()}
                  </span>
                ))}
              </div>
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
