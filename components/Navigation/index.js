import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { WrapperDiv, VerticalNav, NavToggleButton, VerticalNavButtonContainer, VerticalNavButton, HorizontalNav, HorizontalNavButton } from './styles';

import { CHANGE_STAGE_TO_INFO, CHANGE_STAGE_TO_SKILL } from '../../reducers/control';

const Navigation = () => {
    const dispatch = useDispatch();

    const [ navigation, setNavigation ] = useState('');

    const toggleOnNav = useCallback(() => {
        setNavigation('on');
    }, []);
    const toggleOffNav = useCallback(() => {
        setNavigation('off');
    }, []);
    const toHome = useCallback(() => {
        window.scrollTo(0, 0);
    }, []);
    const toInfo = useCallback(() => {
        window.scrollTo(0, window.innerHeight);
        dispatch({
            type: CHANGE_STAGE_TO_INFO
        })
    }, []);
    const toSkill = useCallback(() => {
        window.scrollTo(0, window.innerHeight);
        dispatch({
            type: CHANGE_STAGE_TO_SKILL
        })
    }, []);
    const toProjects = useCallback(() => {
        window.scrollTo(0, window.innerHeight * 2);
    }, []);
    const toContact = useCallback(() => {
        window.scrollTo(0, window.innerHeight * 3);
    }, []);

    return (
        <WrapperDiv>
            <VerticalNav>
                { navigation === 'on'
                    ? <NavToggleButton onClick={toggleOffNav} />
                    : <NavToggleButton onClick={toggleOnNav} />
                }
                <VerticalNavButtonContainer toggle={navigation}>
                    <VerticalNavButton onClick={toHome}>
                        Home
                    </VerticalNavButton>
                    <VerticalNavButton onClick={toInfo}>
                        Info
                    </VerticalNavButton>
                    <VerticalNavButton onClick={toSkill}>
                        Skills
                    </VerticalNavButton>
                    <VerticalNavButton onClick={toProjects}>
                        Projects
                    </VerticalNavButton>
                    <VerticalNavButton onClick={toContact}>
                        Contact
                    </VerticalNavButton>
                </VerticalNavButtonContainer>
            </VerticalNav>
            <HorizontalNav>
                <HorizontalNavButton onClick={toHome}>
                    Home
                </HorizontalNavButton>
                <HorizontalNavButton onClick={toInfo}>
                    Info
                </HorizontalNavButton>
                <HorizontalNavButton onClick={toSkill}>
                    Skills
                </HorizontalNavButton>
                <HorizontalNavButton onClick={toProjects}>
                    Projects
                </HorizontalNavButton>
                <HorizontalNavButton onClick={toContact}>
                    Contact
                </HorizontalNavButton>
            </HorizontalNav>
        </WrapperDiv>
    );
};

export default Navigation;