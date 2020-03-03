
import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { IState } from '../state/createStore';
import { connect } from 'react-redux';
import PleaseLoginCard from '../components/please-login-card';

const Conversation = (props: any) => {

    console.log('got data from the router! ', props.location.state)

    console.log('Reading conversations from redux! ', props.conversations)

    const conversationId: string = props.location.state.conversationId

    const currentConversation = props.conversations.userCreated.filter((convo: any) => {
        if (convo._id === "5e55e9845947e79ee931a48g")
            return convo
    })[0]

    console.log('gg! ', currentConversation)

    return (
        <Layout>
            <SEO title='Message Thread' />

            <h1>
                Conversation {currentConversation._id}
            </h1>

            {props.userId === '' &&
                <div>
                    <PleaseLoginCard pleaseText='Please login to start conversations!' />
                    <br />
                    <br />
                </div>
            }

            <br />
            <br />
            {props.userId === '' &&
                <div>

                    <p>
                        Listing created by: {currentConversation.listingCreator}
                    </p>
                    <p>
                        Listing reponded to by: {currentConversation.listingResponder}
                    </p>

                    <h3>Messages</h3>


                    {console.log('props.conversations ', props.conversations)}
                    {/* {console.log('props.conversations ', props.conversations.filter( (convo: any) => {
                        return convo._id === conversationId
                    }))} */}
                    {currentConversation.messages.map((messageObj: any) => {
                        return <>
                            <p>
                                -
                                &nbsp;
                                {messageObj.saidBy}
                                :
                                &nbsp;
                                {messageObj.message}
                            </p>
                        </>
                    })}

                    <br />
                    <br />

                    <label>Send a new message!</label>
                    <input
                        type="text"
                        // label="Phone"
                        // onChange={formikProps.setFieldValue(this, 'phone')}
                        // value={formikProps.values.phone}
                        name="phone"
                        required
                        disabled={props.userId === ''}
                    />
                    &nbsp;&nbsp;
                    <button
                        disabled={props.userId === ''}
                    >Send</button>

                    <br />
                    <br />

                    {props.userId === '' &&
                        <div>
                            <PleaseLoginCard pleaseText='Please login to start conversations!' />
                            <br />
                            <br />
                        </div>
                    }


                    {/* {props.conversations?.userCreated?.messages.map((messageObj: any) => {
                        return <>
                            <h2>
                                {messageObj.message}
                            </h2>
                        </>
                    })} */}

                    {/* {
                        props.conversations.userCreated.forEach((convo: any) => {
                            return <>
                                <p>convo: {convo}</p>

                            </>

                        })
                    } */}

                    {/* <p>
                        User 1: Hello
                </p>
                    <p>
                        User 2: Hey there
                </p> */}

                </div>
            }


            <br />
            <br />
        </Layout>

    )

}

const mapStateToProps = (state: IState) => {
    return {
        userId: state.userReducer?.userId,
        conversations: state.conversationsReducer?.conversations,
    };
};

export default connect(mapStateToProps)(Conversation);