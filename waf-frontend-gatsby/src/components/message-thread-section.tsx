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

const MessageThreadSection = (props: any) => {

    const [loggedIn, setLoggedIn] = useState(false)

    const toggleState = () => {
        setLoggedIn(!loggedIn)
    }

    console.log('messagesRoomsList are ', props.messagesRoomsList)

    return (
        <>
            <h2>{props.header}</h2>

            {
                props.messagesRoomsList.map((room: any, i: number) => {
                    return (
                        <Link to='/conversation'
                              state={{conversationId: 123}} key={i}>

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
                                cursor: 'pointer',
                                flexDirection: 'column'
                            }} >

                                <div>
                                    <h4>
                                        {room.createdBy} wants to {room.headline} with a friend!
                                    </h4>
                                </div>
                                <div>

                                    <h4>
                                        Created by: {props.creator} on 2/20/2020
                                    </h4>
                                </div>

                            </div>
                        </Link>
                    )
                })
            }
        </>
    );
};

export default MessageThreadSection;
