import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="MyModal">
      <div className="Modal-outside" onClick={onClose}></div>
      <div className="Modal-body">
          {children}
      </div>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}