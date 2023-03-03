import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import {
  HiChevronLeft,
  HiChevronRight,
  HiArrowLongRight,
} from 'react-icons/hi2';

const Wrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: span 2;
  display: flex;
`;

const ImageWrapper = styled.div`
  height: 100%;
  aspect-ratio: calc(5 / 3);
`;

const DescriptionWrapper = styled.div`
  position: relative;
  display: flex;
`;

const SquareButton = styled.button`
  background-color: var(--color-black);
  border: none;
  color: white;
  width: calc(100vw / 13.5);
  height: calc(100vw / 13.5);
  transition: background-color 0.1s ease-out;
  font-size: 8rem;
  line-height: 80%;

  &:hover {
    background-color: var(--color-dark-gray);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export default function Slider() {
  return (
    <Wrapper>
      <ImageWrapper>
        <StaticImage
          src="../../images/slider/slider-1.jpg"
          alt="dinning table"
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <ButtonWrapper>
          <SquareButton>
            <HiChevronLeft />
          </SquareButton>
          <SquareButton>
            <HiChevronRight />
          </SquareButton>
        </ButtonWrapper>
      </DescriptionWrapper>
    </Wrapper>
  );
}
