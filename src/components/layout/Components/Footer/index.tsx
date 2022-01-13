import React from 'react';
import { FooterContainer, FooterText } from './styles';

const LayoutFooter: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText
        href='https://www.linkedin.com/in/gustavo-marques-mello/'
        target='_blank'
        rel='noreferrer'
      >
        Made by Gustavo Marques 💖
      </FooterText>
    </FooterContainer>
  );
};
export default LayoutFooter;
