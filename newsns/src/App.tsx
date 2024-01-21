import { useState } from "react";
import Modal from "./components/Modal";
import ModalPortal from "./components/ModalPortal";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <main>
      <button
        className="w-buttonSmall h-asdf rounded-2xl bg-deepdark text-white"
        onClick={() => setOpen(true)}
      >
        모달열기
      </button>
      <ModalPortal>
        <Modal open={open} onClose={() => setOpen(false)}>모달입니다</Modal>
      </ModalPortal>
    </main>
  );
}

export default App;
