import React from 'react';

interface PleaseLoginCardProps {pleaseText: string}

const PleaseLoginCard = (props: PleaseLoginCardProps) => (
    <>
        <p>
            {props.pleaseText}
        </p>
        <button>
            Login
        </button>
    </>
)

export default PleaseLoginCard;
