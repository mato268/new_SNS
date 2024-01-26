import { cva, type VariantProps } from "class-variance-authority";
import cn from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonForm> {
  children: ReactNode;
}

const buttonForm = cva("", {
  variants: {
    size: {
      large: "text-lg w-buttonLarge h-buttonLarge rounded-2xl",
      medium: "text-md w-buttonMedium h-buttonMedium rounded-2xl",
      small: "text-sm w-buttonSmall h-buttonSmall rounded-2xl",
      Confirmed: "text w-buttonConfirmed h-buttonConfirmed rounded-2xl",
    },
    colors: {
      white: "bg-white text-deepdark",
      deepdark: "bg-deepdark text-white",
      yellow: "bg-yellow text-deepdark",
    },
  },
});

export const Button = ({ children, size, colors, ...rest }: ButtonProps) => {
  return (
    <button className={cn(buttonForm({ size, colors }))} {...rest}>
      {children}
    </button>
  );
};
