import styled from "styled-components";

export const OptionsLable = styled.label`
  display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 8px;

          width: 115px;
          height: 95px;
          margin: 0;
          padding: 0;

          font-size: 16px;
          font-weight: 500;
          line-height: 1.4;

          border-radius: 10px;
          border: 1px solid rgba(16, 24, 40, 0.2);
          color: $textColor;
          background-color: transparent;
          transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

          &:hover {
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }
`;