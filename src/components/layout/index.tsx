import React from 'react';
import {
  ChildrenWrapper,
  Footer,
  LayoutContainer,
  LayoutContent,
  MyPicture,
  Navbar,
} from './styles';
import background_small from '../../global/assets/background_small.jpg';
import background_medium from '../../global/assets/background_medium.jpg';
import background_large from '../../global/assets/background_large.jpg';
import { ReactComponent as Netflix } from '../../global/assets/Netflix.svg';

const LayoutComponent: React.FC = (props) => {
  return (
    <LayoutContainer>
      <MyPicture>
        <source media='(min-width: 1800px)' srcSet={background_large} />
        <source media='(min-width: 1500px)' srcSet={background_medium} />
        <img src={background_small} alt='Background' />
      </MyPicture>
      <LayoutContent>
        <Navbar>
          <Netflix />
        </Navbar>
        <ChildrenWrapper>{props.children}</ChildrenWrapper>
        <Footer>
          <span>Made by Gustavo Marques ❤️</span>
        </Footer>
      </LayoutContent>
    </LayoutContainer>
  );
};
export default LayoutComponent;
