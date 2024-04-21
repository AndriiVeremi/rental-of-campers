import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperNav = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 64px;
  border-bottom: 3px solid #e44848;
`;

export const Logo = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: #356169;
  margin-right: 210px;
`;

export const ListNav = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

export const ListItem = styled.li`
  &:hover {
    color: #e44848;
  }
`;

export const ItemsLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600px;
`;
