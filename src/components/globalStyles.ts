import { createGlobalStyle } from "styled-components";
import mobileBackgroundLight from "../assets/bg-mobile-light.jpg";
import desktopBackgroundLight from "../assets/bg-desktop-light.jpg";

export const GlobalStyles = createGlobalStyle`
    body {
        height: 100vh;
        background-color: ${({ theme }) => theme.Background};
        background-image: ${({ theme }) => theme.BackgroundImageMobile};
        background-repeat: no-repeat;
        background-size: 100%;
        font-family: 'Josefin Sans', sans-serif;
        
    }
    @media screen and (min-width: 768px) {
     body {
        background-color: ${({ theme }) => theme.Background};
         background-image: ${({ theme }) => theme.BackgroundImageDesktop};
         background-size: 100% 250px;
     }
    }
`;
