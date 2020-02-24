import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LilJimProfileImage from '../components/lil-jim-img';
import ActivatableMessageThreadSection from '../components/activatable-message-thread-section';

const ProfileRow = ({ }) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}></div>
)

const someMessageRooms = [{
  createdBy: "Jim",
  headline: "play guitar",
  active: false
},
{
  createdBy: "Jim",
  headline: "go to a dubstep show",
  active: true
}
]

const ProfilePage = () => (
  <Layout>
    <SEO title='My Profile' />

    {/* <ProfileRow>
    </ProfileRow> */}

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', textAlign: 'center' }}>
      <div >
        <h1>@daCreator</h1>
        <h2>Jim</h2>
      </div>
      <div style={{ width: '100px' }}>
        <LilJimProfileImage />
      </div>
    </div>
    <br />
    <br />

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 'calc(3px + 4vw)' }}>
      <p>Bio: Chill musician / athlete / software engineer living in nyc and looking for cool people to hang out with!</p>
      <button>Edit Bio</button>
    </div>
    <br />
    <br />
   
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 'calc(3px + 4vw)' }}>
      <p>Tags: [musician] [athlete] [coder] [chill] [dubstep] [raves] [nyc] [vegan] [smoothies] [wine] [happy hour]</p>
      <button>Edit Tags</button>
    </div>
    <br />
    <br />


    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <p>Current location: 10016</p>
      <button>update location</button>
    </div>
    <br />
    <br />

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 'calc(3px + 4vw)' }}>
      <p>
        You can edit more account details on the <Link to="/settings">Settings</Link> page!
      </p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: 'calc(3px + 4vw)', textAlign: 'center' }}>
      <h1>Your Listings</h1>
      <h3>You have 1 of 1 listings active.</h3>
    </div>
    <br />


    <ActivatableMessageThreadSection header={"Play Guitar"} messagesRoomsList={someMessageRooms} />
    

  </Layout>
);

export default ProfilePage;
