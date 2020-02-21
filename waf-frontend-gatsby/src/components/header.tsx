import { Link } from 'gatsby';
import React from 'react';
import ProfileButton from './profile-button';

const Header = ({ siteTitle = '' }: { siteTitle: string }) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    <ProfileButton/>
    </div>

  </header>
);

export default Header;
