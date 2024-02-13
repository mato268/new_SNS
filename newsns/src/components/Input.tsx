import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode, Ref, forwardRef } from "react";
import React from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputContainer> {
  rightNode?: ReactNode;
  inputRef?: Ref<HTMLInputElement>;
}

const inputContainer = cva("px-4 flex items-center justify-between w-full ", {
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
      smOutline: "rounded-md",
      lgOutline: "rounded-2xl",
    },
  },
});

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ sizes, colors, rightNode, variant, inputRef, ...rest }, ref) => {
    const inputClass = inputContainer({ sizes, colors, variant });
    return (
      <div className={inputClass}>
        <input
          className="w-full outline-none"
          ref={inputRef || ref}
          {...rest}
        />
        <div>{rightNode}</div>
      </div>
    );
  }
);
