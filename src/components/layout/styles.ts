import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  z-index: 0;
`;

export const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  position: absolute;

  background-color: black;
  background-size: cover;

  overflow: hidden;
  z-index: -1;

  > picture img {
    min-width: 100%;
    min-height: 100%;
    opacity: 0.5;
  }
`;
export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
`;
