import React, { useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ITodo } from '../models/todo';
import { navigate } from '@reach/router';

const IndexPage = ({ todos = [], userId = 0}: { todos: ITodo[] | undefined, userId: number | undefined }) => {

  useEffect(() => {
    navigate('/browse-listings')
  }, []);

  return (
    <Layout>
      <SEO title='Home' />
    </Layout>
  );
};

export default IndexPage;
