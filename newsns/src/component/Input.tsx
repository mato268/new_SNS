import { cva } from "class-variance-authority";

interface InputProps {
  type: string;
  size: "medium" | "large" | "outline";
  color: "medium" | "large" | "outline";
  placeholder: string;
}

const inputForm = cva("", {
  variants: {
    size: {
      large: "text-lg w-inputLarge h-inputLarge rounded-2xl",
      medium: "text-md w-inputMedium h-inputmedium rounded-2xl",
      outline: "text-lg w-outline h-outline",
    },
    color: {
      large: "bg-white text-deepdark outline-0 indent-5",
      medium: "bg-white text-deepdark outline-0 indent-5",
      outline: "bg-transparent text-deepdark outline-0 border-b-2 indent-7",
    },
  },
});

export const Input = ({ size, color, type, placeholder }: InputProps) => {
  const className = inputForm({ size, color });
  return <input type={type} className={className} placeholder={placeholder} />;
};