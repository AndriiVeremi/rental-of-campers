import styled from 'styled-components';

export const CatalogPageWrapper = styled.div`
  display: flex;
  gap: 64px;
  padding: 100px 64px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Errors = styled.h2`

  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  color: #e44848;
`;

