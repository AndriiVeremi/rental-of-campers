import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
  /* width: 982px; */
  height: 720px;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    display: flex;
    margin-right: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #101828;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px; 

  margin-bottom: 10px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 16px;
  align-items: center;
`;

export const Rating = styled.span`
  display: flex;
  gap: 5px;
  font-size: 16px;
  line-height: 24px; 
  text-decoration-line: underline;
`;

export const Location = styled.span`
  display: flex;
  gap: 5px;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
`;

export const PriceWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Price = styled.p`
  color: #101828;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px; 
`;

export const GalleryListWrapper = styled.div`
  margin-bottom: 24px;
`;

export const GalleryList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
`;

export const GalleryItem = styled.li``;

export const GalleryImg = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  object-fit: cover;
`;

export const GalleryImgWrapper = styled.div`
  width: 290px;
  height: 310px;
  border-radius: 10px;
`;

export const DescriptionWrapper = styled.div`
  margin-bottom: 44px;
`;

export const Description = styled.p`
  color: #475467;
  font-size: 16px;
  line-height: 24px;
`;

export const InfoWrapper = styled.div``;

export const InfoList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

export const InfoListItem = styled.li`
  padding-bottom: 24px;
`;

export const InfoItemBtn = styled.button`
  background: none;
  border: none;
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const BarLine = styled.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 44px;
`;

export const MorInfoWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
