import styled from 'styled-components';

export const WrapperDiv = styled.div`
    width: 100%;
    height: calc(100vh);
    background: rgb(47, 47, 47);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ContentDiv = styled.div`
    width: 288px;
    height: 324px;
    background: white;
    position: relative;
    @media only screen and (min-width: 768px) {
        width: 512px;
        height: 576px;
    }
    @media only screen and (min-width: 1440px) {
        width: 640px;
        height: 720px;
    }
`;