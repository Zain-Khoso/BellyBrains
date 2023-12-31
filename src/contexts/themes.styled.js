// Utils
import useWindowDimension from "../hooks/useWindowDimension";

const { width } = useWindowDimension();

export const darkTheme = {
    Themes: {
        Theme: "rgb(30, 30, 30)",
        Contrast: "rgb(210, 210, 210)",
    },

    Colors: {
        primary: "rgb(108, 248, 84)",
        primaryOpacity: "rgba(108, 248, 84, 0.6)",
        link: "rgba(11, 110, 165, 1)",
        linkOpacity: "rgba(11, 110, 165, 0.6)",
        theme: "rgb(0, 0, 0)",
        themeOpacity: "rgba(0, 0, 0, 0.25)",
        contrast: "rgb(255, 255, 255)",
        contrastOpacity: "rgba(255, 255, 255, 0.6)",
        green: "green",
        orange: "orange",
        red: "rgb(255, 0, 0)",
        redOpacity: "rgba(255, 0, 0, 0.6)",
    },

    Fonts: {
        primary: `"Mochiy Pop One", sans-serif;`,
        secondary: `"Roboto", sans-serif;`,
    },

    FontSizes: {
        lg: "2rem",
        md: "1rem",
    },

    Heights: {
        navbarHeight: width > 500 ? "5rem" : "3rem",
    },

    Breakpoints: {
        mobileLarge: "370px",
        tablet: "500px",
        desktop: "1024px",
    },
};

export const lightTheme = {
    Themes: {
        Theme: "rgb(210, 210, 210)",
        Contrast: "rgb(30, 30, 30)",
    },

    Colors: {
        primary: "rgb(0, 115, 0)",
        primaryOpacity: "rgba(0, 115, 0, 0.6)",
        link: "rgba(11, 110, 165, 1)",
        linkOpacity: "rgba(11, 110, 165, 0.6)",
        theme: "rgb(255, 255, 255)",
        themeOpacity: "rgba(255, 255, 255, 0.25)",
        contrast: "rgb(0, 0, 0)",
        contrastOpacity: "rgba(0, 0, 0, 0.6)",
        green: "green",
        orange: "orange",
        red: "rgb(255, 0, 0)",
        redOpacity: "rgba(255, 0, 0, 0.6)",
    },

    Fonts: {
        primary: `"Mochiy Pop One", sans-serif;`,
        secondary: `"Roboto", sans-serif;`,
    },

    FontSizes: {
        lg: "2rem",
        md: "1rem",
    },

    Heights: {
        navbarHeight: width > 500 ? "5rem" : "3rem",
    },

    Breakpoints: {
        mobileLarge: "370px",
        tablet: "500px",
        desktop: "1024px",
    },
};
