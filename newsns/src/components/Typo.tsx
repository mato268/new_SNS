import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

interface TypoProps extends VariantProps<typeof TypoForm> {
  tag?: keyof JSX.IntrinsicElements;
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
    fontColor: {
      white: "text-white",
      deepdark: "text-deepdark",
      yellow: "text-yellow",
      gray: "text-gray",
      red: "text-red",
      green: "text-green",
    }
  },
});

export default function Typo({
  tag: Tag = "span",
  children,
  fonts,
  ...rest
}: TypoProps) {
  return <Tag className={TypoForm({ fonts, ...rest })}>{children}</Tag>;
}
