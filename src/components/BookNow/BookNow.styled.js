import styled from 'styled-components';

export const BookNowWrapper = styled.div`
  padding: 24px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  width: 400px;
`;

export const BookNowInfo = styled.div`
  /* display: flex;
flex-direction: column; */
  margin-bottom: 24px;
`;

export const BookTitle = styled.h2`
  color: #101828;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const BookSubTitle = styled.h3`
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const BookNowForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
`;

export const BookNowLable = styled.label``;

export const BookNowInput = styled.input`
  padding: 18px;
  border-radius: 10px;
  background: #f7f7f7;
  border: none;

  color: rgba(16, 24, 40, 0.6);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  width: 365px;
`;

export const BookNowTextarea = styled.textarea`
  border-radius: 10px;
  background: #f7f7f7;
  padding: 18px;

  color: rgba(16, 24, 40, 0.6);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  border: none;
  width: 365px;
`;

export const BookNowBtn = styled.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 200px;
  background: #e44848;

  color: #fff;
  font-family: Inter;
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
