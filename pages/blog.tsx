import { NextPage } from "next";
import Link from "next/link";
import remark from "remark";
import html from "remark-html";

import { getSortedPostsData } from "../lib/posts";

interface Post {
  id: string;
  title: string;
  date: string;
}

interface Props {
  posts: Post[];
}

const Blog: NextPage<Props> = ({ posts }) => (
  <>
    <h1>Hello</h1>
    <div>
      {posts.map(({ id, date, title }) => (
        <>
          <Link href={`/blog/${id}`} as="/blog/ssg-ssr">
            <a>Link</a>
          </Link>
          <div key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </div>
        </>
      ))}
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
