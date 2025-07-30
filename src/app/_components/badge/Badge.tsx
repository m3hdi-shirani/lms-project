import classNames from "classnames";
import { BadgeProps } from "./badge.types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "badge-xs",
  small: "badge-sm",
  normal: "badge-md",
  large: "badge-lg",
};

const Badge: React.FC<BadgeProps> = ({
  variant,
  size = "tiny",
  children,
  className,
}: BadgeProps) => {
  const classess = classNames("badge", className, {
    [`badge-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });

  return <span className={classess}>{children}</span>;
};

export default Badge;
