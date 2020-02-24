import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostListingForm from '../components/post-listing-form';

const PostListingPage = () => (
  <Layout>
    <SEO title='Page two' />

    <div style={{ textAlign: 'center' }}>

      <h1>Create A New Listing!</h1>
      <p>Fill out this short form to create a new listing!</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 'calc(7px + 1vw) calc(15px + 1vw)', }}>
      <PostListingForm />
    </div>
  </Layout>
);

export default PostListingPage;
