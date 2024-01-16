import { cva } from "class-variance-authority";

interface InputProps {
  type: string;
  size: "small" | "medium" | "large";
  color: "white" | "transparent";
  placeholder: string;
  rounded: "yes" | "no";
}

const inputForm = cva("", {
  variants: {
    size: {
      large: "text-lg w-inputLarge h-inputLarge",
      medium: "text-md w-inputMedium h-inputmedium",
      small: "text-md w-inputSamll h-inputmedium",
    },
    color: {
      white: "bg-white outline-0 indent-5",
      transparent: "bg-transparent outline-0 border-b-2 indent-7",
    },
    rounded: {
      yes: "rounded-2xl",
      no: "",
    },
  },
});

export const Input = ({
  size,
  color,
  type,
  placeholder,
  rounded,
}: InputProps) => {
  const className = inputForm({ size, color, rounded });
  return <input type={type} className={className} placeholder={placeholder} />;
};
