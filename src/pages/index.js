import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyles from '../styles/global';

import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import AboutSection from '../components/AboutSection';

// For buttons I need to split a grid in 6 cols

const MainGrid = styled.main`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: 1fr 1fr 0.9fr;
  grid-template-areas:
    'slider-image slider-image slider-image slider-image slider-image slider-image slider-image slider-image slider-text slider-text slider-text slider-text slider-text slider-text'
    'slider-image slider-image slider-image slider-image slider-image slider-image slider-image slider-image slider-text slider-text slider-text slider-text slider-text slider-text'
    'about-dark about-dark about-dark about-dark about-paragraph about-paragraph about-paragraph about-paragraph about-paragraph about-paragraph about-light about-light about-light about-light';
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
