import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    WrapperDiv, InfoPanel, StyledVerticalImg, StyledHorizontalImg, InfoPanelInner, InfoTitleDiv, InfoContentDiv,
    InfoContentInner, IntroductionBox, IntroductionBoxInner, Introduction, IntroductionAdditional, SkillPanel,
    SkillTitleDiv, SkillContentDiv, SkillBox, SkillBoxInner
} from './styles';
import SkillSet from '../SkillSet';

import { CHANGE_STAGE_TO_INFO, CHANGE_STAGE_TO_SKILL } from '../../reducers/control';

const LanguageArray = [
    { name: 'javascript', level: 'intermediate' }
];
const WebSkillsArray = [
    { name: 'html5', level: 'intermediate' },
    { name: 'css3', level: 'intermediate' },
    { name: 'jquery', level: 'basic' }
];
const FrameworkArray = [
    { name: 'react', level: 'intermediate' },
    { name: 'nodejs', level: 'intermediate' }
];
const DatabaseArray = [
    { name: 'mysql', level: 'basic' }
];
const EtcArray = [
    { name: 'github', level: 'basic' },
    { name: 'firebase', level: 'basic' }
];

const InfoSkillPanel = () => {
    const dispatch = useDispatch();

    const { stage } = useSelector(state => state.control);

    const onClickInfo = useCallback(() => {
        dispatch({
            type: CHANGE_STAGE_TO_INFO
        });
    }, []);
    const onClickSkill = useCallback(() => {
        dispatch({
            type: CHANGE_STAGE_TO_SKILL
        });
    }, []);

    return (
        <WrapperDiv>
            <InfoPanel onClick={onClickInfo} stage={stage}>
                <StyledVerticalImg src='/images/info_vertical.jpg' />
                <StyledHorizontalImg src='/images/info_horizontal.jpg' />
                <InfoPanelInner>
                    <InfoTitleDiv>아이언맨이 되고 싶었던 글쟁이</InfoTitleDiv>
                    <InfoContentDiv>
                        <InfoContentInner>
                            <IntroductionBox>
                                <IntroductionBoxInner>
                                    <Introduction>이름 윤민섭.</Introduction>
                                    <Introduction>맨체스터 대학교에서 수학.</Introduction>
                                    <Introduction>전문 번역가로 활동하다가 프로그래밍에 동경을 품고, 늦은 나이에 프로그래밍을 시작한 신입 웹 개발자.</Introduction>
                                    <IntroductionAdditional>능력 밖의 일은 절대 맡지 않지만, 일단 맡은 일은 손해를 보더라도 끝까지 책임을 지는 피곤한 성격</IntroductionAdditional>
                                    <IntroductionAdditional>
                                        번역가로 활동하던 시절<br />
                                        국제한센포럼 기조연설문 번역, 간호학 학술지 번역 등 다양한 번역을 했음.<br />
                                        영화자막을 만들어 본 적도 있고,<br />
                                        영문소설을 책장을 가득 채울만큼 읽어봤음.
                                    </IntroductionAdditional>
                                </IntroductionBoxInner>
                            </IntroductionBox>
                        </InfoContentInner>
                    </InfoContentDiv>
                </InfoPanelInner>
            </InfoPanel>
            <SkillPanel onClick={onClickSkill} stage={stage}>
                <SkillTitleDiv>프로그래밍 스킬</SkillTitleDiv>
                <SkillContentDiv>
                    <SkillBox>
                        <SkillBoxInner>
                            <SkillSet title='Languages' array={LanguageArray} />
                            <SkillSet title='Web skills' array={WebSkillsArray} />
                            <SkillSet title='Frameworks' array={FrameworkArray} />
                            <SkillSet title='Databases' array={DatabaseArray} />
                            <SkillSet title='Etcs' array={EtcArray} />
                        </SkillBoxInner>
                    </SkillBox>
                </SkillContentDiv>
            </SkillPanel>
        </WrapperDiv>
    );
};

export default InfoSkillPanel;