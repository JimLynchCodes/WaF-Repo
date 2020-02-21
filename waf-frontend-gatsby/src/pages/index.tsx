import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { connect, useDispatch } from 'react-redux';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Todos from '../components/todos/todos';
import LoginSection from '../components/login-OLD/login-section-OLD';
import { IState } from '../state/createStore';
import { ITodo } from '../models/todo';
import { navigate } from '@reach/router';

const imgStyle = { maxWidth: '300px', marginBottom: '1.45rem' };

const pStyle = {
  fontSize: 'calc(5px + 3vw)',
  lineHeight: 'calc(12px + 3vw)',
  margin: '2px',
};

const IndexPage = ({ todos = [], userId = 0}: { todos: ITodo[] | undefined, userId: number | undefined }) => {

  useEffect(() => {
    navigate('/browse')
  }, []);

  return (
    <Layout>
      <SEO title='Home' />
      
      {/* <LoginSection userId={userId} /> */}
      {/* <Todos todos={todos} /> */}

    </Layout>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    todos: state.todosReducer.todos,
    userId: state.loginReducer.userId,
  };
};

export default connect(mapStateToProps)(IndexPage);
