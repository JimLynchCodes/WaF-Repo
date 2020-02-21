import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MessagesList from '../components/messages-list';

const someMessageRooms = [{
  createdBy: "Jim",
  headline: "play guitar"
},
{
  createdBy: "Bobby",
  headline: "go to a dubstep show"
}
]

const MessagesPage = () => (
  <Layout>
    <SEO title='Messages Page' />
    <h1>Messages</h1>
    <p></p>
    {/* <p>Welcome to page 2</p>
    <Link to='/'>Go back to the homepage</Link>*/}


    <MessagesList header={"Messages You"} messagesRoomsList={someMessageRooms}/>

    

  </Layout>
);

export default MessagesPage;
