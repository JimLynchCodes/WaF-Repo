import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MessageThreadSection from '../components/message-thread-section';
import { connect } from 'react-redux';
import { IState } from '../state/createStore';
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

const MessagesPage = (props: any) => (
  <Layout>
    <SEO title='Messages Page' />
    <h1>Messages (Pulled from Redux)</h1>
    <hr />
    <p></p>
    {/* <p>Welcome to page 2</p>
    <Link to='/'>Go back to the homepage</Link>*/}

    {console.log('proppers: ', props)}

    <ListingItem creator={"You"} messagesRoomsList={props.conversations} />
    

    {console.log('props: ', props)}


    <h1>Message Threads From Your Listings</h1>
    <MessageThreadSection header={"Play Guitar"} creator={"You"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Code In Clojure"} creator={"You"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Play Tennis"} creator={"You"} messagesRoomsList={someMessageRooms} />

    <h1>Message Threads From Other Users' Listings</h1>
    <MessageThreadSection header={"Play Guitar"} creator={"Someone else"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Code In Clojure"} creator={"Someone else"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Play Tennis"} creator={"Someone else"} messagesRoomsList={someMessageRooms} />



  </Layout>
);

const mapStateToProps = (state: IState) => {

  console.log('statey: ', state)

  return {
    conversations: state.conversationsReducer?.conversations
  };
};

export default connect(mapStateToProps)(MessagesPage);
