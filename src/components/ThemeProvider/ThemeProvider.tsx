import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../theme/index";
import GlobalFonts from "../../fonts/index";

const ThemeProvider: FC<Props> = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalFonts />
    <GlobalStyle />
    <>{children}</>
  </StyledThemeProvider>
);

interface Props {
    children: React.ReactNode
}

export default ThemeProvider;
