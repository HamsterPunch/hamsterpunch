import styled, { keyframes } from 'styled-components';

export const WrapperDiv = styled.div`
    width: 100%;
    height: calc(100vh);
    background: black;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const HorizontalImg = styled.img`
    display: none;
    @media only screen and (min-width: 1024px) {
        display: block;
        width: 100%;
        max-height: 100%;
    }
`;
export const VerticalImg = styled.img`
    width: 100%;
    height: 100%;
    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;
export const MessageDiv = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgb(10, 10, 10, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const loading = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
export const VerticalMessage = styled.div`
    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;
export const MessageTop = styled.div`
    width: 240px;
    height: 32px;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        opacity: 0;
        animation: ${loading} forwards;
        &:nth-child(2) {animation-delay: .1s}
        &:nth-child(3) {animation-delay: .1s}
        &:nth-child(4) {animation-delay: .2s}
        &:nth-child(5) {animation-delay: .2s}
        &:nth-child(6) {animation-delay: .3s}
        &:nth-child(7) {animation-delay: .3s}
        &:nth-child(8) {animation-delay: .4s}
        &:nth-child(9) {animation-delay: .4s}
    }
`;
export const MessageMiddle = styled.div`
    width: 240px;
    height: 32px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        opacity: 0;
        animation: ${loading} forwards;
        &:nth-child(1) {animation-delay: .5s}
        &:nth-child(2) {animation-delay: .5s}
        &:nth-child(3) {animation-delay: .6s}
        &:nth-child(4) {animation-delay: .6s}
        &:nth-child(5) {animation-delay: .7s}
        &:nth-child(6) {animation-delay: .7s}
        &:nth-child(7) {animation-delay: .8s}
        &:nth-child(8) {animation-delay: .8s}
        &:nth-child(9) {animation-delay: .9s}
        &:nth-child(10) {animation-delay: .9s}
        &:nth-child(11) {animation-delay: 1s}
        &:nth-child(12) {animation-delay: 1s}
        &:nth-child(13) {animation-delay: 1.1s}
        &:nth-child(14) {animation-delay: 1.1s}
    }
`;
export const MessageBottom = styled.div`
    width: 240px;
    height: 32px;
    margin-bottom: 2rem;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        opacity: 0;
        animation: ${loading} forwards;
        &:nth-child(1) {animation-delay: 1.2s}
        &:nth-child(2) {animation-delay: 1.2s}
        &:nth-child(3) {animation-delay: 1.3s}
        &:nth-child(4) {animation-delay: 1.3s}
        &:nth-child(5) {animation-delay: 1.4s}
        &:nth-child(6) {animation-delay: 1.4s}
        &:nth-child(7) {animation-delay: 1.5s}
        &:nth-child(8) {animation-delay: 1.5s}
        &:nth-child(9) {animation-delay: 1.5s}
    }
`;
export const HorizontalMessage = styled.div`
    display: none;
    @media only screen and (min-width: 1024px) {
        display: flex;
        & span {
            opacity: 0;
            animation: ${loading} 1s forwards;
            color: white;
            font-size: 2.5rem;
            &:nth-child(2) {animation-delay: .1s;}
            &:nth-child(3) {animation-delay: .1s;}
            &:nth-child(4) {animation-delay: .2s;}
            &:nth-child(5) {animation-delay: .2s;}
            &:nth-child(6) {animation-delay: .3s;}
            &:nth-child(7) {animation-delay: .3s;}
            &:nth-child(8) {animation-delay: .4s;}
            &:nth-child(9) {animation-delay: .4s;}
            &:nth-child(10) {animation-delay: .5s;}
            &:nth-child(11) {animation-delay: .5s;}
            &:nth-child(12) {animation-delay: .6s;}
            &:nth-child(13) {animation-delay: .6s;}
            &:nth-child(14) {animation-delay: .7s;}
            &:nth-child(15) {animation-delay: .7s;}
            &:nth-child(16) {animation-delay: .8s;}
            &:nth-child(17) {animation-delay: .8s;}
            &:nth-child(18) {animation-delay: .9s;}
            &:nth-child(19) {animation-delay: .9s;}
            &:nth-child(20) {animation-delay: 1s;}
            &:nth-child(21) {animation-delay: 1s;}
            &:nth-child(22) {animation-delay: 1.1s;}
            &:nth-child(23) {animation-delay: 1.1s;}
            &:nth-child(24) {animation-delay: 1.2s;}
            &:nth-child(25) {animation-delay: 1.2s;}
            &:nth-child(26) {animation-delay: 1.3s;}
            &:nth-child(27) {animation-delay: 1.3s;}
            &:nth-child(28) {animation-delay: 1.4s;}
            &:nth-child(29) {animation-delay: 1.4s;}
            &:nth-child(30) {animation-delay: 1.5s;}
            &:nth-child(31) {animation-delay: 1.5s;}
            &:nth-child(32) {animation-delay: 1.6s;}
        }
    }
`;