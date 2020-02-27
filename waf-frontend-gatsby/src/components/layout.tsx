/*
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.css';
import { todosRequested } from '../state/actions/todos';
import NavLinkButton from './nav-link-button';
import { initalizeSocketIo } from '../state/actions/socketManager';

const temporaryNavbarStyles = {
  display: "flex",
  justifyContent: "space-around",
  margin: "0 2rem 3rem"
}

const Layout = ({ children }: { children: any }) => {

  const dispatch = useDispatch();

  useEffect(() => {

    /*
     * This is an example of doing things when the app first loads.
     * You can dispatch a Redux action here to do some async thing
     * when the webapp boots up.
     */

     console.log('foo is, ' + process.env.FOO)
    // dispatch(todosRequested());
    dispatch(initalizeSocketIo());

  }, []);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={temporaryNavbarStyles}>
        <NavLinkButton label={"Help"} linkTo={"help"}/>
        <NavLinkButton label={"Post Listing"} linkTo={"post-listing"}/>
        <NavLinkButton label={"Messages"} linkTo={"messages"}/>
        <NavLinkButton label={"Browse"} linkTo={"browse-listings"}/>
      </div>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, WaF App
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
