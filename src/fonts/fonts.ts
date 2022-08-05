import { createGlobalStyle } from 'styled-components'

import SansTtfLight from './OpenSans-Light.ttf'
import SansTtfRegular from './OpenSans-Regular.ttf'
import SansTtfMedium from './OpenSans-Medium.ttf'
import SansTtfSemiBold from './OpenSans-SemiBold.ttf'
import SansTtfBold from './OpenSans-Bold.ttf'
import SansTtfExtraBold from './OpenSans-ExtraBold.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'), local('FontName'), 
        url(${SansTtfLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'), local('FontName'), 
        url(${SansTtfRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'), local('FontName'), 
        url(${SansTtfMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'), local('FontName'), 
        url(${SansTtfSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'), local('FontName'), 
        url(${SansTtfBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'), local('FontName'), 
        url(${SansTtfExtraBold}) format('truetype');
        font-weight: 800;
        font-style: normal;
    }

`
