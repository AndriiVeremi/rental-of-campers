import styled from 'styled-components';

export const InfoWrapper = styled.div``;

export const InfoList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 44px;
`;

export const InfoItem = styled.li`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  border-radius: 100px;
  background: #f2f4f7;
 
  gap: 8px;
`;

export const InfoImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const InfoTitle = styled.h2`
  margin-bottom: 24px;
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px; 
`;

export const BarLine = styled.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 14px;
  flex-direction: column;
`;

export const DetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const DetailsItemName = styled.p`
  color: #101828;
  text-align: center;
  font-size: 18px;

  font-weight: 500;
  line-height: 24px; 
`;

export const DetailsItemResult = styled.span`
  color: #101828;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; 
`;
