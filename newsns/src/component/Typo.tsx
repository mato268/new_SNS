import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

interface TypoProps extends VariantProps<typeof TypoForm> {
  children: ReactNode;
}

const TypoForm = cva("", {
  variants: {
    fonts: {
      korea: "font-korea",
      theJamsil: "font-theJamsil",
    },
    sizes: {
      xSmall: "text-xSmall",
      small: "text-small",
      medium: "text-medium",
      large: "text-large",
      xLarge: "text-xLarge",
    },
    weights: {
      thin: "font-thin",
      normal: "font-normal",
      bold: "font-bold",
      xBold: "font-xBold",
    },
    lineHeight: {
      default: "leading-default",
      normal: "leading-normal",
      loose: "leading-loose",
    },
  },
});

export default function Typo({ children, fonts, ...rest }: TypoProps) {
  return (
    <>
      <span className={TypoForm({ fonts, ...rest })}>
        {children}
      </span>
    </>
  );
}
