import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MessageThreadSection from '../components/message-thread-section';
import ListingItem from '../components/listing-item';
import { IListingsState } from '../state/reducers/listings';
import { connect } from 'react-redux';
import { IState } from '../state/createStore';
import { useDispatch } from 'react-redux';
import { setManuallyEnteringZipcode } from '../state/actions/global-application-properties'

const someMessageRooms = [{
  createdBy: "Jim",
  headline: "play guitar"
},
{
  createdBy: "Bobby",
  headline: "go to a dubstep show"
}
]


const BrowsePage = (props: any) => {

  const dispatch = useDispatch()

  const toggleManuallyEnteringZipcodeuser = (newState: boolean) => {

    console.log('dispatching open manual zipcode entry')
    dispatch(setManuallyEnteringZipcode(newState))
  }

  return (<>
    <Layout>
      <SEO title='Browse Listings' />
      <h1>Listings Near You</h1>

      <h3>{`editing zip: ${props.manuallyEditingZipcode}`}</h3>
      <h3>
        Showing listings within 25 miles of {props.currentZipcode}.
      </h3>

      {props.currentZipcode || props.currentZipcode === 0 &&
        <>
          <p>
            It looks like there's no location set. We need to know what area we should show you listings near! 😊
          </p>
        </>
      }
      {
        props.manuallyEditingZipcode === false &&
        <>
          <button onClick={(e) => toggleManuallyEnteringZipcodeuser(true)}>Enter Zipcode</button>
          <button>Use Current Location</button>
          <button>Set Zip</button>
        </>
      }
      {
        props.manuallyEditingZipcode === true &&
        <>
          <button onClick={(e) => toggleManuallyEnteringZipcodeuser(false)}>Save</button>
          <button onClick={(e) => { }}>Cancel</button>
          {/* 
              <button>Use Current Location</button>
              <button>Set Zip</button> */}
        </>
      }

      <h3> Listings from redux:</h3>
      <ListingItem creator={"You"} messagesRoomsList={props.listings} />

      {/* <ListingItem creator={"You"} messagesRoomsList={someMessageRooms} /> */}

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
  </>)

}

const mapStateToProps = (state: IState) => {
  return {
    listings: state.listingsReducer?.listings,
    currentZipcode: state.globalAppPropertiesReducer?.currentZipcode,
    manuallyEditingZipcode: state.globalAppPropertiesReducer?.manuallyEditingZipcode
  };
};

export default connect(mapStateToProps)(BrowsePage);
