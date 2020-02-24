import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MessageThreadSection from '../components/message-thread-section';
import ListingItem from '../components/listing-item';

const someMessageRooms = [{
  createdBy: "Jim",
  headline: "play guitar"
},
{
  createdBy: "Bobby",
  headline: "go to a dubstep show"
}
]

const BrowsePage = () => (
  <Layout>
    <SEO title='Browse Listings' />
    <h1>Listings Near You</h1>

    <p>
      Showing listings within 25 miles of 10016.
    </p>
    
    <ListingItem creator={"You"} messagesRoomsList={someMessageRooms}/>



    {/* <h1>Message Threads From Your Listings</h1>
    <MessageThreadSection header={"Play Guitar"} creator={"You"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Code In Clojure"} creator={"You"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Play Tennis"} creator={"You"} messagesRoomsList={someMessageRooms} />

    <h1>Message Threads From Other Users' Listings</h1> */}
    {/* <MessageThreadSection header={"Play Guitar"} creator={"Someone else"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Code In Clojure"} creator={"Someone else"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Play Tennis"} creator={"Someone else"} messagesRoomsList={someMessageRooms} /> */}


    {/* <p>Welcome to page 2</p> */}
    {/* <Link to='/'>Go back to the homepage</Link> */}
  </Layout>
);

export default BrowsePage;
