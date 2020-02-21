import React, { useState } from 'react';
import { Link } from 'gatsby';

const buttonStyle = {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: 'rebeccapurple',
    color: 'white',
    outline: 'none',
    cursor: 'pointer',
    minWidth: '22vw',
    minHeight: '60px',
    fontSize: 'calc(7px + 1vw)' 
};


const NavLinkButton = ({ label, linkTo }: { label: string, linkTo: string }) => {

    const [loggedIn, setLoggedIn] = useState(false)

    const toggleState = () => {
        setLoggedIn(!loggedIn)
    }

    return (
        <Link to={linkTo}>
            <button type="button" style={buttonStyle} onClick={toggleState}>
                {label}
            </button>
        </Link>
    );
};

export default NavLinkButton;
