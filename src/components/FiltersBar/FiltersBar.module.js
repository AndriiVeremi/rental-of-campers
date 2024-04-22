import styled from 'styled-components';

export const BarApp = styled.div`
  width: 360px;
`;

export const BarForm = styled.form`
  /* width: 360px; */
`;

export const BarInfo = styled.div`
  margin-bottom: 32px;
`;

export const BarName = styled.label`
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; 
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
  font-weight: 500;
  line-height: 24px; /
  margin-bottom: 14px;
`;

export const NameFilter = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px; 
  margin-bottom: 24px;
`;

export const BarLine = styled.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const VehicleOptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin-bottom: 32px;
`;


export const InfoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const VehicleTypeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin-bottom: 64px;
`;

export const TypeImg = styled.img`
  width: 40px;
  height: 28px;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 110px;
  height: 95px;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  border-radius: 10px;
  border: 1px solid ${({ checked }) => (checked ? '#E44848' : '#cfd1d4')};

  display: inline-block;
  cursor: pointer;
  font-size: 16px;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckboxCheckmark = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: 110px;
  height: 95px;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  border-radius: 10px;
  border: 1px solid ${({ checked }) => (checked ? '#E44848' : '#cfd1d4')};

  &:hover {
  }
`;
