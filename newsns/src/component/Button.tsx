import { cva } from "class-variance-authority";

interface ButtonProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large" | "Confirmed";
  color: "white" | "deepdark" | "yellow";
  hover: "yes" | "no"
  onClick(): void;
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

export const Button = ({ children, size, color, hover, onClick }: ButtonProps) => {
  const className = buttonForm({ size, color, hover });
  return <button className={className} onClick={onClick}>{children}</button>;
};
