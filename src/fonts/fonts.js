import { createGlobalStyle } from 'styled-components';

import Montserrat from './Montserrat.ttf';
import Sans from './Sans.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${Montserrat}) format('ttf'),
        url(${ Sans}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;