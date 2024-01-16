import { cva } from "class-variance-authority";

interface InputProps {
  type: string;
  size: "small" | "medium" | "large";
  color: "white" | "transparent";
  placeholder: string;
  rounded: "yes" | "no";
  iconName: string;
  location: "short" | "long" | "no";
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

const iconForm = cva("", {
  variants: {
    // 아이콘 넣어보고 위치 조정
    location: {
      short: "indent-4",
      long: "indent-7",
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
  iconName,
  location,
}: InputProps) => {
  const inputClass = inputForm({ size, color, rounded });
  const iconClass = iconForm({ location });
  return (
    <>
      <input type={type} className={inputClass} placeholder={placeholder} />
      <i className={iconName + ` ${iconClass}`}></i>
    </>
  );
};
