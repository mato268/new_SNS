import { Button } from "./components/Button";
import { Input } from "./components/Input";
import Typo from "./components/Typo";
import Modal from "./components/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MouseEvent, FormEvent, ChangeEvent } from "react";
import { ReactComponent as ConfirmIcon } from "./icons/confirm.svg";

export default function SignUpPage() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const EMAIL_FORM = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://cors-anywhere/herokuapp.com/https://port-0-sns-backend-3wh3o2blrdcart6.sel5.cloudtype.app/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("제출 실패");
      }

      console.log("성공");
    } catch (error) {
      console.error("실패:", error);
    }
  };

  const onClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {};

  const validateEmail = (email: string): boolean => {
    return EMAIL_FORM.test(email);
  };

  const onNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (validateEmail(value) || value === "") {
      setEmailErrorMessage("");
    } else {
      setEmailErrorMessage("/*이메일 형식이 올바르지 않습니다*/");
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
      </div>
      <div className="flex px-7 -mt-6 justify-center flex-col">
        <Input
          type="text"
          sizes="large"
          colors="white"
          rightNode={nickname.length === 6 && <ConfirmIcon />}
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={onNicknameChange}
          variant="lgoutline"
          maxLength={6}
        />
        <div className="px-5 mt-2 min-h-sm flex justify-start">
          <Typo tag="p" fonts="korea" sizes="small" fontColor="red">
            {emailErrorMessage}
          </Typo>
        </div>
        <form onSubmit={onSubmit}>
          <Input
            type="email"
            sizes="large"
            colors="white"
            rightNode={validateEmail(email) && <ConfirmIcon />}
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={onEmailChange}
            variant="lgoutline"
          />
          <div className="pl-52 pr-7 flex">
            <Button
              type="submit"
              sizes="Confirmed"
              colors="yellow"
              onClick={() => onClick}
            >
              인증코드발송
            </Button>
          </div>
        </form>
      </div>
      <div className="px-7 mt-4 flex justify-between">
        <div className="px-1">
          <Input
            type="text"
            sizes="small"
            colors="white"
            variant="smOutlind"
            maxLength={1}
          />
        </div>
        <div className="px-1">
          <Input
            type="text"
            sizes="small"
            colors="white"
            variant="smOutlind"
            maxLength={1}
          />
        </div>
        <div className="px-1">
          <Input
            type="text"
            sizes="small"
            colors="white"
            variant="smOutlind"
            maxLength={1}
          />
        </div>
        <div className="px-1">
          <Input
            type="text"
            sizes="small"
            colors="white"
            variant="smOutlind"
            maxLength={1}
          />
        </div>
        <div className="px-1">
          <Input
            type="text"
            sizes="small"
            colors="white"
            variant="smOutlind"
            maxLength={1}
          />
        </div>
        <div className="px-1">
          <Input
            type="text"
            sizes="small"
            colors="white"
            variant="smOutlind"
            maxLength={1}
          />
        </div>
      </div>
      <div className="pl-64 pr-7 flex mt-20">
        <Button
          sizes="small"
          colors="yellow"
          onClick={() => setModalOpen(true)}
        >
          다음
        </Button>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
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
            <Link className="w-full" to={"/logIn"}>
              <Button sizes="small" colors="deepdark">
                아니오
              </Button>
            </Link>
            <Button
              sizes="small"
              colors="deepdark"
              onClick={() => setModalOpen(false)}
            >
              네
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
