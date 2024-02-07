import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputContainer> {
  rightNode?: ReactNode;
}

const inputContainer = cva("px-5 flex items-center justify-between w-full ", {
  variants: {
    sizes: {
      large: "text-large font-korea w-full h-lg",
      small: "text-base font-korea w-full h-sm",
    },
    colors: {
      white: "bg-white outline-0 indent-5",
      transparent: "bg-transparent outline-0 border-b-2 indent-7",
    },
    variant: {
      default: "",
      smOutlind: "rounded-md",
      lgoutline: "rounded-2xl",
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
  const inputClass = inputContainer({ sizes, colors, variant });
  return (
    <div className={inputClass}>
      <input className="w-full outline-none" {...rest} />
      <div>{rightNode}</div>
    </div>
  );
};
