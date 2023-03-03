import React from 'react';
import styled from 'styled-components';

const LinksWrapper = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  color: var(--color-white);
  font-size: 2rem;
  letter-spacing: 1px;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const links = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'shop',
    href: '/',
  },
  {
    name: 'about',
    href: '/',
  },
  {
    name: 'contact',
    href: '/',
  },
];

export default function DesktopNavLinks() {
  return (
    <LinksWrapper>
      {links.map(link => (
        <NavLink>{link.name}</NavLink>
      ))}
    </LinksWrapper>
  );
}
