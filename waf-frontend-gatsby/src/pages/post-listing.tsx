import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostListingForm from '../components/post-listing-form';

const PostListingPage = () => (
  <Layout>
    <SEO title='Page two' />
    <h1>Create A New Listing!</h1>

    <p>Fill out this short form to create a new listing!</p>
    <PostListingForm/>

  </Layout>
);

export default PostListingPage;
