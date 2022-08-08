import styled from "@emotion/styled";
import { FC } from "react";
import { colors } from "../theme";
import Icon from "./Icon";

const FirstActionButton: FC<{ disable?: boolean; margin?: string }> = ({
  disable,
  margin,
}) => {
  const disabled = disable ? true : false;
  return (
    <Circle border={false} disable={disabled} margin={margin}>
      <Icon name="add" />
    </Circle>
  );
};

const Circle = styled.div<{
  border: boolean;
  disable: boolean;
  margin?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${(props) => (props.margin ? `margin: ${props.margin}` : `margin: 5px`)};
  background-image: ${colors.gradient.orange100};

  & > svg {
    color: ${colors.colors.white};
  }
  &:hover {
    cursor: pointer;
    background-image: ${colors.gradient.orange80};
  }
  ${(props) =>
    props.disable
      ? `
        border: none;
        background-image: none;
        background-color: ${colors.colors.gray3};
        &:hover {
            border: none;
            background-image: none;
            background-color: ${colors.colors.gray3};
            cursor: default;
        }
    }
    `
      : ""}
`;

export default FirstActionButton;
