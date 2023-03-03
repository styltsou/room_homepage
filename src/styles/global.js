import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :focus {
    outline: none;
  }

  html { 
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: League Spartan, sans-serif;
    @media only screen and (max-width: 100em) {
      font-size: 60%;
    }
    @media only screen and (max-width: 80em) {
      font-size: 57.5%;
    }
    @media only screen and (max-width: 37.5em) {
      font-size: 55%;
    }
  }

  body {
    box-sizing: inherit;
    font-weight: 500;
    line-height: 1.6rem;
    background-color: ${props => props.theme.colors.background};
    z-index: 0;
    scrollbar-width: thin;
    --color-gray: ${props => props.theme.colors.gray};
    --color-dark-gray: ${props => props.theme.colors.darkGray};
    --color-black: ${props => props.theme.colors.black};  
    --color-white: ${props => props.theme.colors.white};
  }

  body::-webkit-scrollbar {
    width: .7rem;
  }

  body::-webkit-scrollbar-track {
    background: var(--color-white);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: var(--color-black);
  }
  
  a,
  input,
  button {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    font-family: inherit;
  } 
`;
