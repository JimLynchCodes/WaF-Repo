import React, { useEffect } from "react"
import { handleAuthentication } from "../utils/auth"
import { connect } from "react-redux";
import { IState } from '../state/createStore';

const Callback = () => {

  useEffect(() => {
    // Update the document title using the browser API

    // setTimeout(() => {
      handleAuthentication()
    // }, 4000)

  });
  return <p>Loading...</p>
}

const mapStateToProps = (state: IState) => {
  return {}
}

export default connect(mapStateToProps)(Callback)