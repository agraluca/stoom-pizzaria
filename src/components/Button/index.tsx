import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large" | "xlarge";
  as?: React.ElementType;
} & ButtonTypes;

function Button({ children, size = "xlarge", ...props }: ButtonProps) {
  return (
    <S.Wrapper size={size} {...props}>
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}

export default Button;
