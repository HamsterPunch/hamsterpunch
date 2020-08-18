import React from 'react';

import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 100%;
    height: 160px;
    background: white;
    @media only screen and (min-width: 768px) {
        height: 240px;
    }
`;
const TitleDiv = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 550;
    letter-spacing: 1px;
    @media only screen and (min-width: 768px) {
        font-size: 2.2rem;
        height: 100px;
    }
`;
const EmailDiv = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    padding-top: 16px;
    font-size: 1.6rem;
    font-weight: 550;
    @media only screen and (min-width: 768px) {
        height: 140px;
    }
`;

const ContactPanel = () => {
    return (
        <WrapperDiv>
            <TitleDiv>
                Contact
            </TitleDiv>
            <EmailDiv>
                msra9my6@gmail.com
            </EmailDiv>
        </WrapperDiv>    
    );
};

export default ContactPanel;