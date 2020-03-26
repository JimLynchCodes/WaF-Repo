import React from 'react';
import { Form, Formik } from 'formik';
import { IState } from '../state/createStore';
import { connect } from 'react-redux';
import PleaseLoginCard from '../components/please-login-card';

// import { Button, Input } from '@code8-io/ui-component-library';

// const CenteredColumn = styled.div`
//   padding: ${({ theme }) => `${theme.spacing.xxxxxxl} ${theme.spacing.xxxl}`};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   z-index: ${({ theme }) => theme.zIndex.signIn};
//   box-shadow: ${({ theme }) => theme.shadow.bottomHeavy};
// `;

// const WelcomeMessage = styled.h2`
//   font-size: ${({ theme }) => theme.font.size.xxl};
//   font-weight: 200;
//   margin-bottom: ${({ theme }) => theme.spacing.s};
// `;

// const Instructions = styled.div`
//   font-size: ${({ theme }) => theme.font.size.s};
//   color: ${({ theme }) => theme.color.gray2};
//   margin-bottom: ${({ theme }) => theme.spacing.xl};
// `;

// const Dashboard = styled.span`
//   font-weight: 700;
// `;

// const ErrorMessage = styled.div`
//   color: ${({ theme }) => theme.color.rose};
//   margin-bottom: ${({ theme }) => theme.spacing.m};
//   width: 30rem;
//   min-width: 100%;
// `;

// ErrorMessage.displayName = 'ErrorMessage';

// const PhoneInput = styled(Input)`
//   max-width: 40rem;
// `;

// PhoneInput.displayName = 'PhoneInput';

// const LoginButton = styled(Button)`
//   margin-top: ${({ theme }) => theme.spacing.xl};
// `;

// LoginButton.displayName = 'LoginButton';

const fileUploadHandler = () => {

}

const fileSelectedHandler = (event: any) => {
    console.log('file selected!', event.target.files.length)
    console.log('file selected!', event.target.files[0])
}

// const PostListingForm = ({ onSignIn, error, loading, currentGeolocation,
//     currentZipcode, userId }: any) => {

const PostListingForm = (props: any) => {
    return (
        <div>
            {/* <h3>Current Location: {currentGeolocation}</h3> */}
            <h3></h3>
            <h3></h3>

            <br />
            <br />

            userId: {props.userId}

            {props.userId === '' &&
                <PleaseLoginCard pleaseText='Please login in order to create listings!' />
            }

            {props.userId !== '' &&

                <Formik
                    initialValues={{
                        phone: ''
                    }}
                    onSubmit={props.onSignIn}
                    render={formikProps => (

                        <Form>
                            {props.userId === '' &&
                                <>

                                    <br />
                                    <br />
                                    <br />
                                </>
                            }

                            <br />

                            <h3>Created by: {props.user.given_name}</h3><br />

                            <p>
                                Activity you want to do:&nbsp;
                        <input
                                    type="text"
                                    // label="Phone"
                                    // onChange={formikProps.setFieldValue(this, 'phone')}
                                    // value={formikProps.values.phone}
                                    name="phone"
                                    required
                                    disabled={props.userId === ''}
                                />
                            </p>

                            <br />
                            <p>
                                Description:&nbsp;
                            <textarea
                                    // type="text"
                                    // label="Phone"
                                    // onChange={formikProps.setFieldValue(this, 'phone')}
                                    // value={formikProps.values.phone}
                                    name="phone"
                                    required
                                    disabled={props.userId === ''}
                                    rows={4}
                                    cols={30}
                                />
                            </p>


                            <p>
                                Image:&nbsp;
                        <input
                                    type="file"
                                    // label="Phone"
                                    onChange={fileSelectedHandler}
                                    // value={formikProps.values.phone}
                                    name="phone"
                                    // required
                                    disabled={props.userId === ''}
                                />
                            </p>

                            <br />
                            <h3>Activate This Listing?</h3><br />
                            <p>
                                Only active listings are visible to other users!

                        </p>
                            <p>
                                Free accounts can only have 1 active listing at a time!
                            </p>

                            <p>
                                Activate?&nbsp;
                        <select id="activate?" disabled={props.userId === ''}>
                                    <option value="activate">Activate</option>
                                    <option value="don't activate">Don't Activate</option>
                                </select>
                            </p>

                            <p>

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Create Listing
                                </button>
                                {/* type="file"
                            // label="Phone"
                            onChange={fileSelectedHandler}
                            // value={formikProps.values.phone}
                            name="phone"
                            required
                            disabled={loading}
                        /> */}
                            </p>


                            {/* <LoginButton type="submit">Login</LoginButton>
                            </div>
                        </CenteredColumn> */}
                        </Form>
                    )}

                />
            }

        </div>

    );

};

const mapStateToProps = (state: IState) => {
    console.log('in post listing, state: ', state)

    return {

        userId: state.userReducer?.userId,
        user: state.userReducer?.user,

        // currentZipcode: state.userReducer?.zipcode ? state.userReducer?.zipcode :
        //     state.globalAppPropertiesReducer?.currentZipcode,

        // currentGeolocation: state.userReducer?.geolocation ? state.userReducer?.geolocation :
        //     state.globalAppPropertiesReducer?.currentGeolocation,

    };
};

export default connect(mapStateToProps)(PostListingForm);