import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;

  @media (max-width: 1024px) {
    display: none;
  }
  
  @media (min-width: 1024px) {
    display: flex;
  }

  
  > svg {
    width: 100%;
    position: absolute;
    bottom: 0;
    min-height: 7rem;
  
    transform: scale(1.5);
  }
`