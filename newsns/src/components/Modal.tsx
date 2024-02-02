import { HTMLAttributes, ReactNode } from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  children: ReactNode;
  open: boolean;
}

export default function Modal({
  open,
  onClose,
  children,
  ...rest
}: ModalProps) {
  const modalRoot = document.getElementById("modal") as HTMLElement;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 flex justify-center ${open ? "bg-deepdark/85" : "hidden"}`}
      {...rest}
    >
      <div
        className={`absolute top-1/2 -mt-32 bg-white rounded-2xl p-10 max-w-md min-w-md max-h-md min-h-md 
        ${open ? "" : "hidden"}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
}
