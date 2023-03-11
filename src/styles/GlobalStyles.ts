import { createGlobalStyle } from "styled-components";
import { bodyStyles, mainBgColor, mainColor } from "@/styles";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Metropolis';
    src: url(process.env.PUBLIC_URL + 'fonts/Metropolis-Medium.eot');
    src: local('Metropolis Medium'), local('Metropolis-Medium'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Medium.eot?#iefix') format('embedded-opentype'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Medium.woff2') format('woff2'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Medium.woff') format('woff'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Medium.ttf') format('truetype'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Medium.svg#Metropolis-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Metropolis';
    src: url(process.env.PUBLIC_URL + 'fonts/Metropolis-Regular.eot');
    src: local('Metropolis Regular'), local('Metropolis-Regular'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Regular.eot?#iefix') format('embedded-opentype'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Regular.woff2') format('woff2'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Regular.woff') format('woff'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Regular.ttf') format('truetype'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Regular.svg#Metropolis-Regular') format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Metropolis';
    src: url(process.env.PUBLIC_URL + 'fonts/Metropolis-Light.eot');
    src: local('Metropolis Light'), local('Metropolis-Light'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Light.eot?#iefix') format('embedded-opentype'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Light.woff2') format('woff2'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Light.woff') format('woff'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Light.ttf') format('truetype'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-Light.svg#Metropolis-Light') format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Metropolis';
    src: url(process.env.PUBLIC_URL + 'fonts/Metropolis-ExtraLight.eot');
    src: local('Metropolis Extra Light'), local('Metropolis-ExtraLight'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-ExtraLight.eot?#iefix') format('embedded-opentype'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-ExtraLight.woff2') format('woff2'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-ExtraLight.woff') format('woff'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-ExtraLight.ttf') format('truetype'),
    url(process.env.PUBLIC_URL + 'fonts/Metropolis-ExtraLight.svg#Metropolis-ExtraLight') format('svg');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }


  body {
    ${bodyStyles};
    color: ${mainColor};
    background-color: ${mainBgColor};
  }
`;
