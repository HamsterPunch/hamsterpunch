import styled, { keyframes, css } from 'styled-components';

export const WrapperDiv = styled.div`
    width: 100%;
    height: calc(100vh);
    background: white;
    display: flex;
    position: relative;
`;
const expand = keyframes`
    0% {
        width: 22%;
    }
    100% {
        width: 78%;
    }
`;
const contract = keyframes`
    0% {
        width: 78%;
    }
    100% {
        width: 22%;
    }
`;
export const InfoPanel = styled.div`
    width: calc(100vw * 0.78);
    height: 100%;
    background: rgb(10, 10, 10, 0.6);
    cursor: pointer;
    position: relative;
    ${props => {
        if (props.stage === 'info') {
            return css`animation: ${expand} 1s ease-in forwards`
        } else if (props.stage === 'skill') {
            return css`animation: ${contract} 1s ease-in forwards`
        } else {
            return css`width: 78%;`;
        }
    }}
`;
export const StyledVerticalImg = styled.img`
    width: 100%;
    height: 100%;
    min-width: calc(100vw * 0.78);
    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;
export const StyledHorizontalImg = styled.img`
    display: none;
    @media only screen and (min-width: 1024px) {
        width: 100%;
        height: 100%;
        min-width: calc(100vw * 0.78);
        display: inline-block;
    }
`;
export const InfoPanelInner = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(10, 10, 10, 0.5);
    top: 0;
    left: 0;
`;
export const InfoTitleDiv = styled.div`
    width: calc(100vw * 0.22);
    height: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    writing-mode: tb-rl;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 1024px) {
        font-size: 1.7rem;
    }
`;
export const InfoContentDiv = styled.div`
    width: calc(100vw * 0.56);
    height: calc(100vh);
    position: absolute;
    top: 0;
    left: calc(100vw * 0.22);
`;
export const InfoContentInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
export const IntroductionBox = styled.div`
    width: 96%;
    height: 272px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    @media only screen and (min-width: 768px) {
        width: calc(100% - 100vw*0.11);
        left: calc(100vw * 0.055);
        height: 320px;
    }
`;
export const IntroductionBoxInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    @media only screen and (min-width: 768px) {
        flex-direction: column;
    }
`;
export const Introduction = styled.div`
    color: white;
    font-size: 0.95rem;
    writing-mode: tb-rl;
    margin-left: 4px;
    margin-right: 4px;
    @media only screen and (min-width: 768px) {
        writing-mode: horizontal-tb;
        margin-left: 0;
        margin-right: 0;
        margin-top: 4px;
        margin-bottom: 4px;
        font-size: 1rem;
    }
`;
export const IntroductionAdditional = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
        display: inline-block;
        color: white;
        margin-top: 4px;
        margin-bottom: 4px;
    }
`;

export const SkillPanel = styled.div`
    width: calc(100vw * 0.22);
    height: 100%;
    background: rgb(245, 245, 245);
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    ${props => {
        if (props.stage === 'skill') {
            return css`animation: ${expand} 1s ease-in forwards`
        } else if (props.stage === 'info') {
            return css`animation: ${contract} 1s ease-in forwards`
        } else {
            return css`width: 22%;`;
        }
    }}
`;
export const SkillTitleDiv = styled.div`
    width: calc(100vw * 0.22);
    height: calc(100vh);
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    writing-mode: tb-rl;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(245, 245, 245);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 200;
    @media only screen and (min-width: 1024px) {
        font-size: 1.7rem;
    }
`;
export const SkillContentDiv = styled.div`
    width: calc(100vw * 0.56);
    height: calc(100vh);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SkillBox = styled.div`
    width: 96%;
    height: 560px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    @media only screen and (min-width: 768px) {
        height: 640px;
    }
    @media only screen and (min-width: 1024px) {
        height: 704px;
    }
`;
export const SkillBoxInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;