import { NextPage } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import { getAllPostIds, getPostData } from "../../lib/posts";
import { Post } from "../../lib/Post";
import { minsToRead } from "../../utils/minsToRead";
import Categories from "../../components/Categories";
import PageViews from "../../components/PageViews";

interface Props {
  post: Post;
}

const BlogPage: NextPage<Props> = ({
  post: { title, blurb, id, views, content, categories, canonical },
}) => {
  return (
    <>
      <Head>
        <title>{title} | Alex Jack Hughes</title>
        <meta name="description" content={`${blurb}`} />
        <link rel="canonical" href={canonical} />
      </Head>
      <div className="columns has-background-white">
        <div className="column is-half is-offset-one-quarter has-text-dark has-margin-small has-padding-medium">
          <img
            src={`/images/${id}.jpg`}
            className="is-cover"
            alt={`${title} cover image`}
          />
          <h1 className="title is-1 has-margin-top-small has-text-dark">
            {title}
          </h1>
          <div className="level is-mobile">
            <div className="level-left">
              <div className="level-item has-transparency-animation">
                <PageViews views={views} />
              </div>
            </div>
            <div className="level-right">
              <div className="level-item has-transparency-animation">
                <p className="has-text-grey is-size-5">
                  {minsToRead(content)} min read
                </p>
              </div>
            </div>
          </div>
          <div>
            <ReactMarkdown
              source={content}
              className="has-margin-bottom-large is-size-5 has-text-grey blog-content"
            />
          </div>
          {canonical && (
            <div className="has-text-centered has-margin-bottom-large">
              <a
                rel="canonical"
                className="has-margin-bottom-large is-size-5"
                href={canonical}
              >
                Read the original article on Hackernoon
              </a>
            </div>
          )}
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
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
