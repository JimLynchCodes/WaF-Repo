import React from 'react';
import LilJimProfileImage from './lil-jim-img';
import { Link } from 'gatsby';
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

const ProfileButton = (props: any) => {

    return (
        <>
            <h3>userId: {props.userId} {props.userId === '' ? 'nothin' : props.userId}</h3>
            {
                props.userId === '' &&
                <>
                    <Link to='/account'>
                        <button type="button" style={buttonStyle}>
                            Login
                    </button>
                    </Link>
                    {/* <button type="button" style={buttonStyle} onClick={toggleState}>
                        Fake Login
                    </button> */}
                </>
            }

            {
                props.userId !== '' &&
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
    console.log('in profile button: ', state)
    
    return {

        userId: state.userReducer?.userId,

        // currentZipcode: state.userReducer?.zipcode ? state.userReducer?.zipcode :
        //     state.globalAppPropertiesReducer?.currentZipcode,

        // currentGeolocation: state.userReducer?.geolocation ? state.userReducer?.geolocation :
        //     state.globalAppPropertiesReducer?.currentGeolocation,

    };
};

export default connect(mapStateToProps)(ProfileButton);

