import React from 'react';

import { WrapperDiv, HorizontalImg, VerticalImg, MessageDiv, VerticalMessage, MessageTop, MessageMiddle, MessageBottom, HorizontalMessage } from './styles';

const WelcomePanel = () => {
    return (
        <WrapperDiv>
            <VerticalImg src='/images/vertical.jpg' />
            <HorizontalImg src='/images/horizontal.jpeg' />
            <MessageDiv>
                <VerticalMessage>
                    <MessageTop>
                        <span>D</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                    </MessageTop>
                    <MessageMiddle>
                        <span>H</span>
                        <span>a</span>
                        <span>m</span>
                        <span>s</span>
                        <span>t</span>
                        <span>e</span>
                        <span>r</span>
                        <span>p</span>
                        <span>u</span>
                        <span>n</span>
                        <span>c</span>
                        <span>h</span>
                        <span>'</span>
                        <span>s</span>
                    </MessageMiddle>
                    <MessageBottom>
                        <span>P</span>
                        <span>o</span>
                        <span>r</span>
                        <span>t</span>
                        <span>f</span>
                        <span>o</span>
                        <span>l</span>
                        <span>i</span>
                        <span>o</span>
                    </MessageBottom>
                </VerticalMessage>
                <HorizontalMessage>
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                    &nbsp;
                    <span>H</span>
                    <span>a</span>
                    <span>m</span>
                    <span>s</span>
                    <span>t</span>
                    <span>e</span>
                    <span>r</span>
                    <span>p</span>
                    <span>u</span>
                    <span>n</span>
                    <span>c</span>
                    <span>h</span>
                    <span>'</span>
                    <span>s</span>
                    &nbsp;
                    <span>P</span>
                    <span>o</span>
                    <span>r</span>
                    <span>t</span>
                    <span>f</span>
                    <span>o</span>
                    <span>l</span>
                    <span>i</span>
                    <span>o</span>
                </HorizontalMessage>
            </MessageDiv>
        </WrapperDiv>
    );
};

export default WelcomePanel;