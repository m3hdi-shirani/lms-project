import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

type TextboxType = "text" | "email" | "password" | "number";

export type TextboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  ComponentBase & {
    type?: TextboxType;
  };
