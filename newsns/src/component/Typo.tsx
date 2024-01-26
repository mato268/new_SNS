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
  },
});

export default function Typo({ children, fonts, ...rest }: TypoProps) {
  return (
    <>
      <span className={TypoForm({ fonts })} {...rest}>
        {children}
      </span>
    </>
  );
}
