import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { getAllPostIds, getPostData } from "../../lib/posts";

// interface Blog {
//   title: string;
//   categories: string[];
//   publishedAt: string;
//   views: number;
//   wordCount: number;
//   coverUrl: string;
//   content: string;
// }

interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
  cover: string;
}

interface Props {
  post: Post;
}

const BlogPage: NextPage<Props> = ({ post }) => {
  return (
    <div className="columns has-background-white">
      <div className="column is-half is-offset-one-quarter has-text-dark has-margin-small has-padding-medium">
        <img src={post.cover} className="is-cover" />
        <h1 className="title is-1 has-margin-top-small has-text-dark">
          {post.title}
        </h1>
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <p className="has-text-grey is-size-5">
                {numberWithCommas(Math.floor(Math.random() * 1000 + 834))} views
              </p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <p className="has-text-grey is-size-5">
                {minsToRead(post.content)} min read
              </p>
            </div>
          </div>
        </div>
        <div>
          <ReactMarkdown
            source={post.content}
            className="has-margin-bottom-large is-size-5 has-text-grey"
          />
        </div>
      </div>
    </div>
  );
};

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const minsToRead = (content: string): number => {
  return Math.floor(content.split(" ").length / 40);
};

export async function getStaticProps({ params }) {
  const post = getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default BlogPage;
