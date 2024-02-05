import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputForm> {
  rightNode?: ReactNode;
}

const inputForm = cva("", {
  variants: {
    sizes: {
      large: "text-large font-korea w-full h-lg",
      medium: "text-base font-korea w-full h-lg",
      small: "text-base font-korea w-full h-lg",
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
    <div>
      <input className={inputClass} {...rest} />
      <div className="relative float-right -translate-y-11">
      {rightNode}
      </div>
    </div>
  );
};
