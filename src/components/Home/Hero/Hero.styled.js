import styled from 'styled-components';
import HeroImg from '../../../images/pictures/hero.jpg';
import { ReactComponent as Close } from '../../../images/icons/close.svg';

export const HeroWrapper = styled.div`
  display: flex;
  background: linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(${HeroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1440px;
  height: 480px;
  border-radius: 20px;
`;

export const HeroInfo = styled.div`
  padding: 200px 0px 0px 840px;
`;

export const HeroTitle = styled.div`
  font-size: 44px;
  color: #fff;
  margin-bottom: 40px;
`;

export const ModalHeroWrapper = styled.div`
  background-color: #fff;
  padding: 10px 40px 50px 40px;
  border-radius: 20px;
  width: 450px;
`;

export const BtnCloses = styled(Close)`
  display: flex;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  stroke: #101828;
  margin-left: auto;
  margin-bottom: 10px;
  &:hover {
    stroke: #e44848;
  }
`;
