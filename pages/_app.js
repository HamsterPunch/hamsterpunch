import React from 'react';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import wrapper from '../store/configureStore';

const App = ({ Component }) => (
    <Component />
);

App.propTypes = {
    Component: PropTypes.elementType.isRequired
};

export default wrapper.withRedux(App);