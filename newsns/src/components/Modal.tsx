import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  open: boolean;
}

export default function Modal({ open, onClose, children }: ModalProps) {

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        open ? "bg-deepdark/50" : "invisible"
      }
    `}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl p-10 max-w-md 
        ${open ? "scale-100 opacity-100" : "scale-110 opacitiy-0"}`}
        onClick={e => e.stopPropagation()}
      >
        <button className="absolute top-2 right-2" onClick={onClose}>
          닫기
        </button>
        {children}
      </div>
    </div>
  );
}
