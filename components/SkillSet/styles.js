import styled from 'styled-components';

export const WrapperDiv = styled.div`
    width: 100%;
    height: 112px;
    @media only screen and (min-width: 768px) {
        height: 128px;
    }
    @media only screen and (min-width: 1024px) {
        height: 140px
    }
`;
export const TitleDiv = styled.div`
    width: 100%;
    height: 32px;
    font-size: 1.1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Skills = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (min-width: 768px) {
        height: 96px;
    }
    @media only screen and (min-width: 1024px) {
        height: 108px;
    }
`;
export const Skill = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-left: 3px;
    margin-right: 3px;
    position: relative;
    @media only screen and (min-width: 768px) {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        margin-left: 8px;
        margin-right: 8px;
    }
    @media only screen and (min-width: 1024px) {
        width: 88px;
        height: 88px;
        border-radius: 44px;
        margin-left: 12px;
        margin-right: 12px;
    }
`;
export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;
export const LevelDisplay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(10, 10, 10, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.9rem;
`;