import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        light: "#FFFFFF",
        grey: "#a3a3a3",
        dark: "#171717",
        transparent: 'transparent',
    },
    fonts: {
        roboto: "'Roboto', sans_serif",
        raleway: "'Raleway', sans_serif",
    },
    device: {
        xs: `(min-width: 320px)`,
        sm: `(min-width: 768px)`,
        lg: `(min-width: 1200px)`,
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;