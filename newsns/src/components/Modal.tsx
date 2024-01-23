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
      className={`fixed inset-0 ${open ? "bg-deepdark/85" : "hidden"}`}
      onClick={onClose}
      {...rest}
    >
      <div
        className={`bg-white rounded-2xl p-10 max-w-maxWidth min-w-minWidth max-h-maxHeight min-h-minHeight 
        ${open ? "" : "hidden"}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
}
