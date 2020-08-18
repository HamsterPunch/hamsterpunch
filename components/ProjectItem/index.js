import React from 'react';
import Link from 'next/link';

import { StyledSlide, ThumbnailDiv, Thumbnail, DescriptionDiv, TitleBox, PeriodBox, DescriptionBox, GithubBox, StyledImg } from './styles';

const ProjectItem = ({ project }) => {
    return (
        <StyledSlide>
            <Link href={`//${project.link_web}`}>
                <a target='_blank' style={{ text: 'black', textDecoration: 'none' }}>
                    <ThumbnailDiv>
                        <Thumbnail src={`/thumbnails/${project.thumbnail}`} />
                    </ThumbnailDiv>
                </a>
            </Link>
            <DescriptionDiv>
                <TitleBox>
                    {project.title}
                </TitleBox>
                <PeriodBox>
                    {`개발기간: ${project.period}`}
                </PeriodBox>
                <DescriptionBox>
                    {project.description}
                </DescriptionBox>
                <GithubBox>
                    <Link href={`${project.link_get}`}>
                        <a target='_blank'>
                            <StyledImg src='/utils/github.png' />
                        </a>
                    </Link>
                </GithubBox>
            </DescriptionDiv>
        </StyledSlide>
    );
};

export default ProjectItem;