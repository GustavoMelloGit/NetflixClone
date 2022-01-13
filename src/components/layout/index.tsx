import React from 'react';
import {
  BackgroundContainer,
  ContentContainer,
  LayoutContainer,
} from './styles';
import background_small from '../../global/assets/background_small.jpg';
import background_medium from '../../global/assets/background_medium.jpg';
import background_large from '../../global/assets/background_large.jpg';
import { Footer, Navbar } from './Components';

const LayoutComponent: React.FC = (props) => {
  return (
    <LayoutContainer>
      <BackgroundContainer>
        <picture>
          <source media='(min-width: 1800px)' srcSet={background_large} />
          <source media='(min-width: 1500px)' srcSet={background_medium} />
          <img src={background_small} alt='Background' />
        </picture>
      </BackgroundContainer>
      <Navbar />
      <ContentContainer>{props.children}</ContentContainer>
      <Footer />
    </LayoutContainer>
  );
};
export default LayoutComponent;
