import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LilJimProfileImage from '../components/lil-jim-img';

const ProfileRow = ({ }) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}></div>
)

const ListingDetails = () => (
  <Layout>
    <SEO title='My Profile' />

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', textAlign: 'center' }}>
      <div >
        <h2>Jim is looking to...</h2>
        <h1>Play Guitar</h1>
        <h2>with a friend!</h2>
      </div>
      <div style={{ width: '100px' }}>
        <LilJimProfileImage />
        <br/>
        <h2>Jim</h2>
        <h2>10016</h2>
      </div>
    </div>
    <br />
    <br />

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 'calc(3px + 4vw)' }}>
      <p>Want to play guitar with Jim?</p>
      <button>Message Jim!</button>
    </div>
    <br />
    <br />

  </Layout>
);

export default ListingDetails;
