import { useState } from "react";
import Modal from "./components/Modal";
import ModalPortal from "./components/ModalPortal";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  function onOpenModal() {
    setOpen(true);
  }

  function onCloseModal() {
    setOpen(false);
  }
  return (
    <main>
      <button className="w-buttonSmall h-buttonSmall rounded-2xl bg-deepdark text-white" onClick={onOpenModal}>모달열기</button>
      {open && (<ModalPortal>
        <Modal onClose={onCloseModal}>모달입니다</Modal>
      </ModalPortal>
      )}
    </main>
  );
}

export default App;
