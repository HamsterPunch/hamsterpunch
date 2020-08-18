import styled, { css, keyframes } from 'styled-components';

export const WrapperDiv = styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
`;
export const VerticalNav = styled.div`
    position: relative;
    padding-top: 1rem;
    padding-left: 1rem;
    width: 7rem;
    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;
export const NavToggleButton = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background-image: url('/utils/menu.png');
    background-position: center;
`;

const slideRight = keyframes`
    0% {
        transform: translateX(-8rem);
    }
    100% {
        transform: translateX(0);
    }
`;
const slideLeft = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-8rem);
    }
`;
export const VerticalNavButtonContainer = styled.div`
    width: 6.5rem;
    ${props => {
        if (props.toggle==='on') {
            return css`animation: ${slideRight} 0.5s forwards`
        } else if(props.toggle==='off') {
            return css`animation: ${slideLeft} 0.5s forwards`
        } else {
            return css`transform: translateX(-8rem)`
        }
    }}
`;

export const VerticalNavButton = styled.div`
    width: 6rem;
    height: 2.5rem;
    color: lightgray;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:focus {
        font-weight: bold;
    }
`;
export const HorizontalNav = styled.div`
    display: none;
    @media only screen and (min-width: 1024px) {
        width: 640px;
        height: 4rem;
        background: rgba(10, 10, 10, 0.7);
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;
        float: right;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;
export const HorizontalNavButton = styled.div`
    width: 80px;
    color: white;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        font-weight: bold;
    }
`;