import styled from 'styled-components';

export const BarApp = styled.div`
  /* width: 360px; */
`;

export const BarForm = styled.form`
  width: 360px;
`;

export const BarInfo = styled.div`
  margin-bottom: 32px;
`;

export const BarName = styled.h2`
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const BarInput = styled.input`
  border-radius: 10px;
  background: #f7f7f7;
  padding: 18px;
  display: inline-block;
  width: 324px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
`;

export const BarNameFilter = styled.h2`
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-bottom: 14px;
`;

export const NameFilter = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  margin-bottom: 24px;
`;

export const BarLine = styled.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 200px;
  background: #e44848;

  color: #fff;
  /* font-family: Inter; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  border: none;
  outline: none;

  &:hover {
    background: #d84343;
  }
`;
