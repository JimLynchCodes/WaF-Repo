import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MessageThreadSection from '../components/message-thread-section';
import { connect } from 'react-redux';
import { IState } from '../state/createStore';
import ListingItem from '../components/listing-item';
import PleaseLoginCard from '../components/please-login-card';

const someMessageRooms = [{
  createdBy: "Jim",
  headline: "play guitar",
  linkToUrl: '/conversation/1234'
},
{
  createdBy: "Bobby",
  headline: "go to a dubstep show",
  linkToUrl: '/conversation/5678'
}
]

const ConversationsPage = (props: any) => (
  <Layout>
    <SEO title='Conversations Page' />
    <h1>Conversations</h1>
    <hr />
    <p></p>
    {/* <p>Welcome to page 2</p>
    <Link to='/'>Go back to the homepage</Link>*/}

    {console.log('proppers: ', props)}

    {props.userId === '' &&
      <ListingItem creator={"You"} messagesRoomsList={props.conversations} />
    }

    {props.userId === '' &&
      <>
        <PleaseLoginCard pleaseText='Please login to have conversations!' />
        <br />
        <br />
      </>
    }

    {props.userId !== '' &&
      <ListingItem creator={"You"} messagesRoomsList={props.conversations} />
    }

    {console.log('props: ', props)}


    <MessageThreadSection header={"(Test)"} creator={"You"} messagesRoomsList={someMessageRooms} />
    {/* <h1>Message Threads From Your Listings</h1>
    <MessageThreadSection header={"Code In Clojure"} creator={"You"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Play Tennis"} creator={"You"} messagesRoomsList={someMessageRooms} />

    <h1>Message Threads From Other Users' Listings</h1>
    <MessageThreadSection header={"Play Guitar"} creator={"Someone else"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Code In Clojure"} creator={"Someone else"} messagesRoomsList={someMessageRooms} />
    <MessageThreadSection header={"Play Tennis"} creator={"Someone else"} messagesRoomsList={someMessageRooms} /> */}

  </Layout>
);

const mapStateToProps = (state: IState) => {

  console.log('message pagestate: ', state)

  return {
    userId: state.userReducer?.userId,
    conversations: state.conversationsReducer?.conversations
  };
};

export default connect(mapStateToProps)(ConversationsPage);
