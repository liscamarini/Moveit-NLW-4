import React from "react"
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import {GlobalStyle} from '../styles/global';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
);

export default MyApp;
