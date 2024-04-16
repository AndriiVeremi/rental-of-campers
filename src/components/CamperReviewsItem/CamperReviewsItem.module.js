import styled from 'styled-components';

export const ReviewItem = styled.li`

`;

export const ReviewInfo = styled.div`
display: flex;
align-items: center;
margin-bottom: 16px;
`;

export const ReviewAvatar = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60px;
height: 60px;
border-radius: 60px;
background: #F2F4F7;
margin-right: 16px;
`;

export const ReviewAvatarName = styled.h2`
color: #E44848;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 30px; /* 125% */
`;

export const ReviewName = styled.p`
color: #101828;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 133.333% */
`;

export const ReviewComment = styled.p`
color: #475467;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
`;
