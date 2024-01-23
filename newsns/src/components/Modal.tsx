import { HTMLAttributes, ReactNode } from "react";
import ReactDOM from "react-dom";

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

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 flex justify-center ${open ? "bg-deepdark/85" : "hidden"}`}
      onClick={onClose}
      {...rest}
    >
      <div
        className={`absolute top-1/2 -mt-32 bg-white rounded-2xl p-10 max-w-modalMaxWidth min-w-modalMinWidth max-h-modalMaxHeight min-h-modalMinHeight 
        ${open ? "" : "hidden"}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
}
