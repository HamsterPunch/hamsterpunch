import React, { useState, useCallback } from 'react';

import { WrapperDiv, TitleDiv, Skills, Skill, StyledImg, LevelDisplay } from './styles';

const SkillButton = ({ name, level }) => {
    const [ display, setDisplay ] = useState(false);

    const onShowDisplay = useCallback(() => {
        setDisplay(true);
    }, []);
    const onHideDisplay = useCallback(() => {
        setDisplay(false);
    }, []);

    return (
        <Skill onMouseOver={onShowDisplay} onMouseLeave={onHideDisplay}>
            <StyledImg src={`/utils/${name}.png`} />
            { display
                ? <LevelDisplay>{level}</LevelDisplay>
                : null
            }
        </Skill>
    );
};

const SkillSet = ({ title, array }) => {
    return (
        <WrapperDiv>
            <TitleDiv>
                {title}
            </TitleDiv>
            <Skills>
                { array.map(v => (
                    <SkillButton key={v.name} name={v.name} level={v.level} />
                ))}
            </Skills>
        </WrapperDiv>
    );
};

export default SkillSet;