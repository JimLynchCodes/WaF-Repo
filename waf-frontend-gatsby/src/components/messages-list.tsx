import React, { useState } from 'react';

const buttonStyle = {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: 'rebeccapurple',
    color: 'white',
    outline: 'none',
    cursor: 'pointer'
};

const profileImgStyle = { width: '50px', marginBottom: '1rem', borderRadius: '50%', overflow: 'hidden' };

const MessagesList = ({ header, messagesRoomsList }: any) => {

    const [loggedIn, setLoggedIn] = useState(false)

    const toggleState = () => {
        setLoggedIn(!loggedIn)
    }

    console.log('messagesRoomsList are ', messagesRoomsList)

    return (
        <>
            <h1>{header}</h1>

            {
                messagesRoomsList.map((room: any, i: number) => {
                    return (
                        <div style={{
                            padding: '20px',
                            margin: '30px',
                            backgroundColor: 'lightblue',
                            display: 'flex',
                            alignContent: 'center',
                            verticalAlign: 'middle',
                            borderRadius: '12px',
                            fontSize: 'calc(10px + 1vw)',
                            outline: 'none',
                            cursor: 'pointer'
                        }} key={i}>
                            <p>
                                {room.createdBy} wants to {room.headline} with a friend!
                            </p>
                        </div>)
                })
            }
        </>
    );
};

export default MessagesList;
