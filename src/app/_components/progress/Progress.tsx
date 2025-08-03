import classNames from "classnames";
import { ProgressProps } from "./progress.types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "progress-xs",
  small: "progress-sm",
  normal: "progress-md",
  large: "progress-lg",
};

const Progress: React.FC<ProgressProps> = ({
  value,
  variant,
  size = "small",
  className,
}: ProgressProps) => {
  const classes = classNames(
    "progress",
    {
      [`progress-${variant}`]: variant,
      [`${sizeClasses[size]}`]: size,
    },
    className
  );
  return (
    <progress value={value} max={100} className={classes}>
      Progress
    </progress>
  );
};

export default Progress;
