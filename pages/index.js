import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { getFeaturedPosts } from '@/lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        ></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    //revalidate: 60, // Revalidate every 60 seconds
  };
}

export default HomePage;
