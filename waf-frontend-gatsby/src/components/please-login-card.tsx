import React from 'react';
import ProfileButton from './profile-button';

interface PleaseLoginCardProps {pleaseText: string}

const PleaseLoginCard = (props: PleaseLoginCardProps) => (
    <>
        <p>
            {props.pleaseText}
        </p>
        <ProfileButton/>
    </>
)

export default PleaseLoginCard;
