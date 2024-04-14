import styled from "styled-components";

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
  border: 1px solid rgba(71, 84, 103, 0.20);

  color: #101828;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  outline: none;

  &:hover {
    border: 1px solid  #E44848;
  }
`;