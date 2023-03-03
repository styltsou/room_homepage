import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  grid-row: 3 / span 2;
  grid-column: span 2;
  width: 100%;
  display: flex
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const ImageWrapper = styled.div`
  height: 100%;
  aspect-ratio: calc(5 / 3);
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  max-width: 75rem;

  & h2 {
    text-transform: uppercase;
    margin-bottom: 3rem;
    color: var(--color-black);
    font-size: 3.4rem;
    letter-spacing: 4px;
  }

  & p {
    font-size: 2.2rem;
    line-height: 130%;
    color: var(--color-gray);
  }
`;

export default function AboutSection() {
  return (
    <Wrapper>
      <ImageWrapper>
        <StaticImage
          src="../../images/about/about-dark.jpg"
          alt="dark coffe table"
        />
      </ImageWrapper>
      <AboutWrapper>
        <h2>About our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </AboutWrapper>
      <ImageWrapper>
        <StaticImage
          src="../../images/about/about-light.jpg"
          alt="white chair"
        />
      </ImageWrapper>
    </Wrapper>
  );
}
