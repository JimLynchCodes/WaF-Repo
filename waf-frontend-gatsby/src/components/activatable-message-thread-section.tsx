import React, { useState } from 'react';
import { Link } from 'gatsby';

const buttonStyle = {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: 'rebeccapurple',
    color: 'white',
    outline: 'none',
    cursor: 'pointer'
};

const profileImgStyle = { width: '50px', marginBottom: '1rem', borderRadius: '50%', overflow: 'hidden' };

const ActivatableMessageThreadSection = ({ header, messagesRoomsList }: any) => {

    const [loggedIn, setLoggedIn] = useState(false)

    const toggleState = () => {
        setLoggedIn(!loggedIn)
    }

    console.log('messagesRoomsList are ', messagesRoomsList)

    return (
        <>
            {/* <h2>{header}</h2> */}

            {
                messagesRoomsList.map((room: any, i: number) => {
                    return (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignContent: 'space-evenly',
                            flexDirection: 'row'
                        }}>
                            <Link to="/message-thread">

                                <div style={{
                                    padding: '20px',
                                    margin: '30px',
                                    backgroundColor: 'lightblue',
                                    display: 'flex',
                                    alignContent: 'space-evenly',
                                    verticalAlign: 'middle',
                                    borderRadius: '12px',
                                    fontSize: 'calc(10px + 1vw)',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    flexDirection: 'row'
                                }} key={i}>

                                    <div>
                                        <h4>
                                            {room.createdBy} wants to {room.headline} with a friend!
                                        </h4>
                                    </div>

                                </div>

                            </Link>
                            <button style={{ minWidth: '150px', maxHeight: '80px' }} disabled>Activate</button>
                            {/* <button style={{minWidth: '150px', maxHeight: '80px'}}>DeActivate</button> */}
                        </div>
                    )
                })
            }
        </>
    );
};

export default ActivatableMessageThreadSection;
