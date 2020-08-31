import React from 'react';
import Slider from 'react-slick';

import ProjectItem from '../ProjectItem';

import { WrapperDiv, ContentDiv } from './styles';

const ProjectArray = [
    {
        link_web: 'https://repeatafter.site',
        thumbnail: 'repeatafter.png',
        title: 'Repeat: After',
        period: '2020.08.09~2020.08.31',
        description: 'Next + Redux + Express + MySQL과 브라우저의 레코더 기능을 이용하여 만든 간단한 영어학습 사이트.',
        link_git: 'https://www.github.com/hamsterpunch/repeat-after'
    }
]

const ProjectsPanel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        slidesToshow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <WrapperDiv>
            <ContentDiv>
                <Slider {...settings}>
                    { ProjectArray.map(v => (
                        <ProjectItem key={v.title} project={v} />
                    ))}
                </Slider>
            </ContentDiv>
        </WrapperDiv>    
    );
};

export default ProjectsPanel;