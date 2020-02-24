import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LilJimProfileImage from '../components/lil-jim-img';

const ProfileRow = ({ }) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}></div>
)


const ProfilePage = () => (
  <Layout>
    <SEO title='My Profile' />

    {/* <ProfileRow>
    </ProfileRow> */}


    {/* <Link to="/my-profile">
      <div >
      <h1>@daCreator</h1>
      <h2>Jim</h2>
      </div>
      <div style={{ width: '100px' }}>
      <LilJimProfileImage />
      </div>
    </Link> */}
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', textAlign: 'center' }}>
      <h1>Account Settings</h1>
    </div>


    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      Or go back to &nbsp;<Link to="/my-profile/">Your Profile</Link>
    </div>
    <br/>

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <p>Username: @daUser</p>
      <button>update Username</button>
    </div>
    <br />
    <br />

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <p>First Name: Jim</p>
      <button>update First Name</button>
    </div>
    <br />
    <br />


    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <p>Account Type:  Free</p>
      <button>Upgrade / Downgrade</button>
    </div>
    <br />
    <br />

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <p>Email:  jimbo-slice@gmail.com</p>
      <button>Edit Email</button>
    </div>
    <br />
    <br />

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <p>Email:  jimbo-slice@gmail.com</p>
      <button>Edit Email</button>
    </div>
    <br />
    <br />

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <p>Change password:</p>
      <button>Change Password</button>
    </div>
    <br />
    <br />

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <p>Delete Account:</p>
      <button>Delete Account</button>
    </div>


  </Layout>
);

export default ProfilePage;
