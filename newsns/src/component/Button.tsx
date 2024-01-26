import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonForm> {
  children: ReactNode;
}

const buttonForm = cva("", {
  variants: {
    sizes: {
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
    variant: {
      default: "",
      hover: "hover:bg-gray",
    },
  },
});

export const Button = ({
  children,
  sizes,
  colors,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <button className={buttonForm({ sizes, colors, variant })} {...rest}>
      {children}
    </button>
  );
};
