import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const ContainerNotFound = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 40px;
`

export const NotFoundInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 40px;
`

export const NotFoundBtnArea = styled.div`
display: flex;
gap: 30px;
justify-content: center;
align-items: center;
`

export const NotFoundBtn = styled(NavLink)`
 padding: 8px 22px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #5d5d5d;
  color: #5d5d5d;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #4f4f4f;
    border: 1px solid #4f4f4f;
    color: #fff;
  }
  &.active {
    background-color: #4f4f4f;
    border: 1px solid #4f4f4f;
    color: #fff;
  }
`