import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const HelpPage = () => (
  <Layout>
    <SEO title='Page two' />
    <h1>Hi from the HelpPage</h1>
    <p>Welcome to page 2</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export default HelpPage;
