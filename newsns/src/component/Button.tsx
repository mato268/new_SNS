import { cva } from "class-variance-authority";

interface ButtonProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large" | "Confirmed";
  color: "small" | "medium" | "large" | "yellow" | "Confirmed";
}

const buttonForm = cva("", {
  variants: {
    size: {
      large: "text-lg w-buttonLarge h-buttonLarge rounded-2xl",
      medium: "text-md w-buttonMedium h-buttonMedium rounded-2xl",
      small: "text-sm w-buttonSmall h-buttonSmall rounded-2xl",
      Confirmed: "text w-Confirmed h-Confirmed rounded-2xl",
    },
    color: {
      large: "bg-white text-deepdark hover:bg-gray",
      medium: "bg-deepdark text-white hover:bg-gray",
      small: "bg-deepdark text-white hover:bg-gray",
      yellow: "bg-yellow text-deepdark",
      Confirmed: "bg-yellow text-deepdark",
    },
  },
});

export const Button = ({ children, size, color }: ButtonProps) => {
  const className = buttonForm({ size, color });
  return <button className={className}>{children}</button>;
};
