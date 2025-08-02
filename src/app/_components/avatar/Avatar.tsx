import React from "react";
import { AvatarProps } from "./avatar.types";
import { Size } from "../types/size.type";
import classNames from "classnames";
import Image from "next/image";
import { IconUserProfile } from "../icons/icons";

const sizeClass: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  variant = "primary",
  size = "normal",
  className,
}: AvatarProps) => {
  const classes = classNames("avatar", className, {
    [`avatar-${variant}`]: variant,
    [`${sizeClass[size]}`]: size,
  });
  return (
    <div
      className={classes}
      style={{
        width: sizeClass[size],
        height: sizeClass[size],
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={sizeClass[size]}
          height={sizeClass[size]}
        />
      ) : (
        <IconUserProfile
          width={sizeClass[size] / 2}
          height={sizeClass[size] / 2}
        />
      )}
    </div>
  );
};

export default Avatar;
