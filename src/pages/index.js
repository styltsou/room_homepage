import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyles from '../styles/global';

import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import AboutSection from '../components/AboutSection';

const MainGrid = styled.main`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  /* grid-template-columns: repeat(14, 1fr); */
`;

export const Head = () => <title>Room</title>;

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <MainGrid>
        <Navbar />
        <Slider />
        <AboutSection />
      </MainGrid>
      <GlobalStyles />
    </ThemeProvider>
  );
}
