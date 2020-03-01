import React, { useState } from 'react';
import LilJimProfileImage from './lil-jim-img';
import { Link } from 'gatsby';
import { logout } from '../state/actions/login';

const buttonStyle = {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: 'rebeccapurple',
    color: 'white',
    outline: 'none',
    cursor: 'pointer'
};

const profileImgStyle = { width: '50px', marginBottom: '1rem', borderRadius: '50%', overflow: 'hidden' };

const ProfileButton = ({ }) => {

    const [loggedIn, setLoggedIn] = useState(false)

    const toggleState = () => {
        setLoggedIn(!loggedIn)
    }

    return (
        <>
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

                    <button type="button" style={buttonStyle} onClick={(e) => {logout()}}>
                        Logout
                    </button>
                    
                </div>
            }
        </>
    );
};

export default ProfileButton;
