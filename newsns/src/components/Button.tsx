import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonForm> {
  children: ReactNode;
}

const buttonForm = cva("hover:bg-gray", {
  variants: {
    sizes: {
      large: "text-xLarge font-korea w-full h-lg rounded-2xl",
      medium: "text-base font-korea w-full h-md rounded-2xl",
      small: "text-small font-korea w-full h-sm rounded-2xl",
      Confirmed: "text-small font-korea w-full h-sm rounded-2xl",
    },
    colors: {
      white: "bg-white text-deepdark",
      deepdark: "bg-deepdark text-white",
      yellow: "bg-yellow text-deepdark",
    },
  },
});

export const Button = ({ children, sizes, colors, ...rest }: ButtonProps) => {
  const buttonClass = buttonForm({ sizes, colors });
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};
