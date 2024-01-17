import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import cn from "classnames";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonForm> {
  children: React.ReactNode;
}

const buttonForm = cva("", {
  variants: {
    size: {
      large: "text-lg w-buttonLarge h-buttonLarge rounded-2xl",
      medium: "text-md w-buttonMedium h-buttonMedium rounded-2xl",
      small: "text-sm w-buttonSmall h-buttonSmall rounded-2xl",
      Confirmed: "text w-buttonConfirmed h-buttonConfirmed rounded-2xl",
    },
    color: {
      white: "bg-white text-deepdark",
      deepdark: "bg-deepdark text-white",
      yellow: "bg-yellow text-deepdark",
    },
    hover: {
      yes: "hover:bg-gray",
      no: "",
    },
  },
});

export const Button = ({
  children,
  size,
  color,
  hover,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonForm({ size, color, hover }))}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
