import { ComponentBase } from "../types/component-base.type";

export type PriceProps = Omit<ComponentBase, "variant" | "isDisabled"> & {
  price?: number;
  text?: string;
};
