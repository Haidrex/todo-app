import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    Background: string;
    ListBackground: string;
    Border: string;
    SecondaryText: string;
    PrimaryText: string;
    Hover: string;
    BackgroundImageMobile: string;
    BackgroundImageDesktop: string;
  }
}
