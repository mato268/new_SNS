import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputForm> {
  rightNode: ReactNode;
}

const inputForm = cva("", {
  variants: {
    sizes: {
      large: "text-lg w-inputLarge h-inputLarge",
      medium: "text-md w-inputMedium h-inputmedium",
      small: "text-md w-inputSamll h-inputmedium",
    },
    colors: {
      white: "bg-white outline-0 indent-5",
      transparent: "bg-transparent outline-0 border-b-2 indent-7",
    },
    variant: {
      default: "",
      outline: "rounded-2xl",
    },
  },
});

export const Input = ({
  sizes,
  colors,
  rightNode,
  variant,
  ...rest
}: InputProps) => {
  const inputClass = inputForm({ sizes, colors, variant });
  return (
    <>
      <input className={inputClass} {...rest} />
      {rightNode}
    </>
  );
};
