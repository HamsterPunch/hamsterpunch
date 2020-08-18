import styled from 'styled-components';

export const StyledSlide = styled.div`
    width: 100%;
    height: 324px;
    background: lightgray;
    @media only screen and (min-width: 768px) {
        height: 576px;
    }
    @media only screen and (min-width: 1440px) {
        height: 720px;
    }
`;
export const ThumbnailDiv = styled.div`
    width: 100%;
    height: 50%;
`;
export const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
`;
export const DescriptionDiv = styled.div`
    width: 100%;
    height: 50%;
    background: white;
`;
export const TitleBox = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: bold;
    @media only screen and (min-width: 768px) {
        height: 64px;
        font-size: 1.2rem;
    }
    @media only screen and (min-width: 1440px) {
        height: 80px;
        font-size: 1.4rem;
    }
`;
export const PeriodBox = styled.div`
    width: 100%;
    height: 28px;
    font-size: 0.85rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: dimgray;
    @media only screen and (min-width: 768px) {
        height: 48px;
        font-size: 1rem;
    }
`;
export const DescriptionBox = styled.div`
    width: 100%;
    height: 70px;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: dimgray;
    @media only screen and (min-width: 768px) {
        width: 70%;
        height: 112px;
        
        margin: 0 auto;
        font-size: 0.95rem;
    }
    @media only screen and (min-width: 1440px) {
        width: 60%;
        font-size: 1rem;
    }
`;
export const GithubBox = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    @media only screen and (min-width: 768px) {
        height: 64px;
        font-size: 0.9rem;   
    }
    @media only screen and (min-width: 1440px) {
        font-size: 1rem;   
    }
`;
export const StyledImg = styled.img`
    width: 32px;
    height: 32px;
    @media only screen and (min-width: 768px) {
        height: 100%;
    }
`;