import React from 'react';
import NotFound from '../../images/error.webp';
import { ContainerNotFound, NotFoundInfo, NotFoundBtnArea, NotFoundBtn } from './PageNotFound.styled.js';

const PageNotFound = () => {
  return (
    <ContainerNotFound>
      <img
        src={NotFound}
        alt="NotFound"
        width={'600px'}
        height={'600px'}
      />
      <NotFoundInfo>
        <h1>Page Not Found</h1>
        <p>
          We can't seem to find the page you're looking for. Please check the
          URL for any typos.
        </p>
      </NotFoundInfo>
      <NotFoundBtnArea>
        <NotFoundBtn to="/">Go to Home</NotFoundBtn>
        <NotFoundBtn to="/catalog">Go to Catalog</NotFoundBtn>
      </NotFoundBtnArea>
    </ContainerNotFound>
  );
};

export default PageNotFound;

