import { Button } from "./components/Button";
import { Input } from "./components/Input";
import Typo from "./components/Typo";
import Modal from "./components/Modal";
import { useState } from "react";
import { ChangeEvent } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState<boolean>(false);

  const onNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);

    if (value.length > 6) {
      setErrorMessage("/*6글자 이상입니다*/");
    } else {
      setErrorMessage("");
    }
  };
  return (
    <div className="bg-deepdark w-full gap-6 h-full flex justify-center flex-col">
      <div className="px-9 text-center -mt-6">
        <Typo
          tag="h1"
          fonts="korea"
          sizes="xLarge"
          weights="normal"
          fontColor="yellow"
        >
          /*회원가입을 환영해*/
        </Typo>
      </div>
      <div className="px-12 min-h-sm flex justify-start">
        {nickname.length === 0 && (
          <Typo tag="p" fonts="korea" sizes="small" fontColor="green">
            /*6글자까지 가능합니다*/
          </Typo>
        )}
        {errorMessage && (
          <Typo tag="p" fonts="korea" sizes="small" fontColor="red">
            {errorMessage}
          </Typo>
        )}
      </div>
      <div className="flex px-7 -mt-4 justify-center flex-col gap-6">
        <Input
          type="text"
          sizes="large"
          colors="white"
          rightNode="icon1"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={onNicknameChange}
          variant="outline"
          maxLength={6}
        />
        <Input
          type="text"
          sizes="large"
          colors="white"
          rightNode="icon2"
          placeholder="이메일을 입력해주세요"
          variant="outline"
        />
      </div>
      <div className="pl-52 pr-7 -mt-6 flex">
        <Button sizes="Confirmed" colors="yellow">
          인증코드발송
        </Button>
      </div>
      <div className="px-7 h-lg flex justify-between">
        <div className="px-1">
          <Input type="text" sizes="small" colors="white" variant="outline" />
        </div>
        <div className="px-1">
          <Input type="text" sizes="small" colors="white" variant="outline" />
        </div>
        <div className="px-1">
          <Input type="text" sizes="small" colors="white" variant="outline" />
        </div>
        <div className="px-1">
          <Input type="text" sizes="small" colors="white" variant="outline" />
        </div>
        <div className="px-1">
          <Input type="text" sizes="small" colors="white" variant="outline" />
        </div>
        <div className="px-1">
          <Input type="text" sizes="small" colors="white" variant="outline" />
        </div>
      </div>
      <div className="pl-64 pr-7 flex mt-20">
        <Button sizes="small" colors="yellow" onClick={() => setOpen(true)}>
          다음
        </Button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-3">
          <div className="text-center">
            <Typo tag="h1" fonts="korea" sizes="xLarge" fontColor="green">
              가입완료
            </Typo>
          </div>
          <div className="text-center">
            <Typo
              tag="p"
              fonts="theJamsil"
              sizes="xLarge"
              fontColor="deepdark"
              weights="thin"
            >
              메인페이지로<br></br>이동하시겠습니까?
            </Typo>
          </div>
          <div className="w-full gap-7 h-full flex justify-between">
            <Link className="w-full" to={"/LogIn"}>
              <Button sizes="small" colors="deepdark">
                아니오
              </Button>
            </Link>
            <Button
              sizes="small"
              colors="deepdark"
              onClick={() => setOpen(false)}
            >
              네
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
