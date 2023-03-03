import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import DesktopNavLinks from './DesktopNavLilnks';

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid pink; */
  z-index: 10;
`;

export default function Navbar() {
  return (
    <Wrapper>
      <Logo />
      <DesktopNavLinks />
    </Wrapper>
  );
}
