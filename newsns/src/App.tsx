import { useState } from "react";
import Modal from "./components/Modal";
import { Button } from "./components/Button";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const onLockScroll = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const onScroll = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };

  const outsideClose = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <main>
      <Button size="large" colors="deepdark" onClick={onLockScroll}>
        모달열기
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} onClick={outsideClose}>
        <h1 className="flex justify-center">
        메인페이지로 <br></br>이동하시겠습니까?
        </h1>
        <br></br>
        <div className="flex justify-between">
        <Button size="small" colors="deepdark" onClick={onScroll}>
          아니오
        </Button>
        <Button size="small" colors="deepdark" onClick={onScroll}>
          네
        </Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
