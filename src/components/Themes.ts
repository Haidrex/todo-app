import { DefaultTheme } from "styled-components";
import mobileBackgroundLight from "../assets/bg-mobile-light.jpg";
import desktopBackgroundLight from "../assets/bg-desktop-light.jpg";
import mobileBackgroundDark from "../assets/bg-mobile-dark.jpg";
import desktopBackgroundDark from "../assets/bg-desktop-dark.jpg";

export const lightTheme: DefaultTheme = {
  Background: "hsl(236, 33%, 92%)",
  ListBackground: "hsl(0, 0%, 98%)",
  Border: "hsl(233, 11%, 84%)",
  SecondaryText: "hsl(236, 9%, 61%)",
  PrimaryText: "hsl(235, 19%, 35%)",
  Hover: "hsl(235, 19%, 35%)",
  BackgroundImageMobile: `url(${mobileBackgroundLight})`,
  BackgroundImageDesktop: `url(${desktopBackgroundLight})`,
};

export const darkTheme: DefaultTheme = {
  Background: "hsl(235, 21%, 11%)",
  ListBackground: "hsl(237, 14%, 26%)",
  PrimaryText: "hsl(234, 39%, 85%)",
  Hover: "hsl(236, 33%, 92%)",
  Border: "hsl(234, 11%, 52%)",
  SecondaryText: "hsl(233, 14%, 35%)",
  BackgroundImageMobile: `url(${mobileBackgroundDark})`,
  BackgroundImageDesktop: `url(${desktopBackgroundDark})`,
};
