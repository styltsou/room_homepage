import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

// const Wrapper = styled.div`
//   width: 100%;
//   width: 100%;
//   display: flex
//   align-items: center;
//   justify-content: space-between;
//   flex: 1;
// `;

const ImageWrapper = styled.div`
  /* height: 100%; */
  /* aspect-ratio: calc(5 / 3); */

  /* &:nth-child(3) {
    grid-area: about-dark;
  }

  &:nth-child(5) {
    grid-area: about-light;
  } */
`;

const AboutWrapper = styled.div`
  grid-area: about-paragraph;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 5rem;

  & h2 {
    text-transform: uppercase;
    margin-bottom: 3rem;
    color: var(--color-black);
    font-size: 3.2rem;
    letter-spacing: 4px;
  }

  & p {
    font-size: 2rem;
    line-height: 130%;
    color: var(--color-gray);
  }
`;

export default function AboutSection() {
  return (
    <>
      <ImageWrapper style={{ gridArea: 'about-dark' }}>
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
      <ImageWrapper style={{ gridArea: 'about-light' }}>
        <StaticImage
          src="../../images/about/about-light.jpg"
          alt="white chair"
        />
      </ImageWrapper>
    </>
  );
}
