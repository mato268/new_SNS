import { HTMLAttributes, ReactNode } from "react";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  children: ReactNode;
  open: boolean;
}

export default function Modal({ open, onClose, children, ...rest }: ModalProps) {

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        open ? "bg-deepdark/85" : "hidden"
      }
    `}
    {...rest}
    >
      <div
        className={`bg-white rounded-2xl p-10 max-w-md 
        ${open ? "scale-100 opacity-100" : "hidden"}`}
        onClick={e => e.stopPropagation()}
      >
        <button className="absolute bottom-2 right-2" onClick={onClose}>
          확인
        </button>
        {children}
      </div>
    </div>
  );
}