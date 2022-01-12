import styled from 'styled-components';

export const LayoutContainer = styled.main`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: black;
  img {
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LayoutContent = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const Navbar = styled.nav`
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 15%, transparent 100%);
  padding: 1.3rem max(20px, 3vw);
  svg {
    cursor: pointer;
    width: 10.4rem;
    height: fit-content;
  }
`;

export const ChildrenWrapper = styled.div``;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  height: 7rem;
  span {
    color: white;
  }
`;
