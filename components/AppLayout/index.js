import React from 'react';

import { WrapperDiv } from './styles';

const AppLayout = ({ children }) => {
    return (
        <WrapperDiv>
            { children }
        </WrapperDiv>
    );
};

export default AppLayout;