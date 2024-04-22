import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    width: 160px;
  `,
  medium: css`
    width: 166px;
  `,
  large: css`
    width: 173px;
  `,
};

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 200px;
  background: #e44848;

  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #d84343;
  }

  ${props => sizes[props.size]}
`;

export const LoadMoreButton = styled.button`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fff;

  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);

  color: #101828;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  outline: none;
  cursor: pointer;

  &:hover {
    border: 1px solid #e44848;
  }
`;
