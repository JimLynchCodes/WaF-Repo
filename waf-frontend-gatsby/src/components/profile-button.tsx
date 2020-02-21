import React, { useState } from 'react';
import LilJimProfileImage from './lil-jim-img';
import { Link } from 'gatsby';
// import { ITodo } from '../../models/todo';

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
                <Link to='/account'>
                    <button type="button" style={buttonStyle} onClick={toggleState}>
                        Login
                    </button>
                </Link>
            }

            {
                loggedIn &&
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={profileImgStyle}>
                        <LilJimProfileImage />
                    </div>

                    <button type="button" style={buttonStyle} onClick={toggleState}>
                        Logout
                        </button>
                </div>
            }
        </>
    );
};

export default ProfileButton;
