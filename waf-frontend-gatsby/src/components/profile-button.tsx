import React, { useState } from 'react';
import LilJimProfileImage from './lil-jim-img';
import { Link } from 'gatsby';
// import { logout } from '../state/actions/login';
import { IState } from '../state/createStore';
import { connect } from 'react-redux';
import { logout } from '../utils/auth';

const buttonStyle = {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: 'rebeccapurple',
    color: 'white',
    outline: 'none',
    cursor: 'pointer'
};

const profileImgStyle = { width: '50px', marginBottom: '1rem', borderRadius: '50%', overflow: 'hidden' };

const ProfileButton = ({ userId }: any) => {

    const [loggedIn, setLoggedIn] = useState(false)

    const toggleState = () => {
        setLoggedIn(!loggedIn)
    }

    return (
        <>
            <h2>userId: {userId}</h2>
            {
                !loggedIn &&
                <>
                    <Link to='/account'>
                        <button type="button" style={buttonStyle}>
                            Login
                    </button>
                    </Link>
                    <button type="button" style={buttonStyle} onClick={toggleState}>
                        Fake Login
                    </button>
                </>
            }

            {
                loggedIn &&
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Link to="/my-profile/">
                        <div style={profileImgStyle}>
                            <LilJimProfileImage />
                        </div>
                    </Link>

                    <button type="button" style={buttonStyle} onClick={(e) => { logout() }}>
                        Logout
                    </button>

                </div>
            }
        </>
    );
};

const mapStateToProps = (state: IState) => {

    console.log('message pagestate: ', state)

    return {
        userId: state.userReducer?.userId,
    };
};

export default connect(mapStateToProps)(ProfileButton);

