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
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fff;

  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);

  color: #101828;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  outline: none;

  &:hover {
    border: 1px solid #e44848;
  }
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

