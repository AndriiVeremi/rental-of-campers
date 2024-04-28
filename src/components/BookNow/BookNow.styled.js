import styled from 'styled-components';

export const BookNowWrapper = styled.div`
  padding: 24px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  width: 400px;
  background-color: #FFF;
`;

export const BookNowInfo = styled.div`
  margin-bottom: 24px;
`;

export const BookTitle = styled.h2`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px; 
`;

export const BookSubTitle = styled.h3`
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; 
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
  font-size: 16px;
  line-height: 20px; 
  width: 365px;
`;

export const BookNowTextarea = styled.textarea`
  border-radius: 10px;
  background: #f7f7f7;
  padding: 18px;

  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  line-height: 20px; 
  border: none;
  width: 365px;
`;
