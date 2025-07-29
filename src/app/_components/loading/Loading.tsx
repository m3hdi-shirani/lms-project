import classNames from "classnames";
import { LoadingProps } from "./loading.type";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  variant,
  size = "normal",
  className,
}: LoadingProps) => {
  const classes = classNames("loading", className, {
    [`loading-${type}`]: type,
    [`loading-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });

  return <span className={classes}>Loading</span>;
};

export default Loading;
