import { useState } from "react";
import Modal from "./components/Modal";
import { Input } from "./component/Input";
import { Button } from "./component/Button";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const onOutSideClose = () => {
    setOpen(false);
  };
    
  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {}

  return (
    <main>
      {/*버튼 구분하기 위함*/}
      <div style={{ backgroundColor: "blue", width: "390px", height: "200px" }}>
        <Button sizes="large" colors="white" variant="default" onClick={() => onClick}>
          로그인
        </Button>
        <Button sizes="medium" colors="deepdark" variant="default" onClick={() => onClick}>
          로그인
        </Button>
        <Button sizes="small" colors="deepdark" variant="hover" onClick={() => onClick}>
          새 계정
        </Button>
        <Button sizes="small" colors="yellow" variant="default" onClick={() => onClick}>
          다음
        </Button>
        <Button sizes="Confirmed" colors="yellow" variant="hover" onClick={() => onClick}>
          인증코드발송
        </Button>
      </div>
      
      {/*인풋 구분하기 위함*/}
      <div style={{ backgroundColor: "blue", width: "390px", height: "200px" }}>
        <Input
          type="text"
          sizes="large"
          colors="white"
          rightNode="iconName1"
          placeholder="닉네임을 입력해주세요"
          variant="outline"
        ></Input>
        <Input
          type="text"
          sizes="medium"
          colors="white"
          rightNode="iconName2"
          placeholder="댓글을 입력해주세요"
          variant="outline"
        ></Input>
        <Input
          type="text"
          sizes="small"
          colors="transparent"
          rightNode="no"
          placeholder="제목을 입력해주세요"
          variant="default"
        ></Input>
      </div>
      
      <Button sizes="large" colors="deepdark" variant="default" onClick={() => setOpen(true)}>
        모달열기
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} onClick={onOutSideClose}>
        <h1 className="flex justify-center">
          메인페이지로 <br></br>이동하시겠습니까?
        </h1>
        <br></br>
        <div className="flex justify-between">
          <Button sizes="small" colors="deepdark" onClick={() => setOpen(false)}>
            아니오
          </Button>
          <Button sizes="small" colors="deepdark" onClick={() => setOpen(false)}>
            네
          </Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
