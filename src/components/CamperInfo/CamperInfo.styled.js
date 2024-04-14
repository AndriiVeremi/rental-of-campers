import styled from "styled-components";


export const ModalWrapper = styled.div`
background-color: #fff;
padding: 40px;
border-radius: 20px;
width: 982px;
height: 720px;
`;

export const NameWrapper = styled.div`
display: flex;
justify-content: space-between;
color: #101828;
font-size: 24px;
font-weight: 600;
line-height: 30px; /* 125% */

margin-bottom: 10px;
`;

export const RatingWrapper = styled.div`
display: flex;
margin-bottom: 16px;
gap: 18px;
`;

export const Rating = styled.span`
/* font-family: Inter; */
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
text-decoration-line: underline;
`;

export const PriceWrapper = styled.div`
margin-bottom: 24px;
`;

export const Price = styled.p`
color: #101828;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 30px; /* 125% */
`;

export const GalleryList = styled.ul`
display: flex;
list-style: none;
gap: 16px;
`;

export const GalleryItem = styled.li`

`;

export const GalleryImg = styled.img`
width: 290px;
height: 310px;
border-radius: 10px;
`;