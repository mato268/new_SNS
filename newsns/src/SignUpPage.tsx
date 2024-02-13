import { Button } from "./components/Button";
import { Input } from "./components/Input";
import Typo from "./components/Typo";
import Modal from "./components/Modal";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MouseEvent, FormEvent, ChangeEvent } from "react";
import { ReactComponent as ConfirmIcon } from "./icons/confirm.svg";

const EMAIL_FORM = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const apiPath = process.env.REACT_APP_SEND_API_PATH || "";

export default function SignUpPage() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const [showInputs, setShowInputs] = useState<boolean>(false);
  const [verificationCodes, setVerificationCodes] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array.from({ length: 6 }, () => null)
  );

  const onInputChangeAndFocus = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
  
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  
    const verification = [...verificationCodes];
    verification[index] = value;
    setVerificationCodes(verification);
  };

  const onVerificationCodesRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowInputs(true);
    setShowButtons(true);

    try {
      const response = await fetch(apiPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("제출 실패");
      }

      console.log("성공");
      console.log(email);
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

    if (value.length === 0 || value.length > 6) {
      setNicknameErrorMessage("/*6글자까지 가능합니다*/");
    } else {
      setNicknameErrorMessage("");
    }
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
      <div
        className={`px-9 text-center -mt-6 ${
          showButtons && showInputs ? "" : "-mt-52"
        }`}
      >
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
        <Typo tag="p" fonts="korea" sizes="small" fontColor="green">
          {nicknameErrorMessage}
        </Typo>
      </div>
      <div className="flex px-7 -mt-6 justify-center flex-col">
        <Input
          type="text"
          sizes="large"
          colors="white"
          rightNode={nickname.length > 0 && <ConfirmIcon />}
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={onNicknameChange}
          variant="lgOutline"
          maxLength={6}
        />
        <div className="px-5 mt-2 min-h-sm flex justify-start">
          <Typo tag="p" fonts="korea" sizes="small" fontColor="red">
            {emailErrorMessage}
          </Typo>
        </div>
        <form onSubmit={onVerificationCodesRequest}>
          <Input
            type="email"
            sizes="large"
            colors="white"
            rightNode={validateEmail(email) && <ConfirmIcon />}
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={onEmailChange}
            variant="lgOutline"
          />
          <div className="pl-52 mt-4 flex">
            <Button
              type="submit"
              sizes="Confirmed"
              colors="yellow"
            >
              인증코드발송
            </Button>
          </div>
        </form>
        {showInputs && (
          <div className="mt-4 flex justify-between">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="px-1">
                <Input
                  type="text"
                  sizes="small"
                  colors="white"
                  variant="smOutline"
                  maxLength={1}
                  value={verificationCodes[index]}
                  onChange={e => onInputChangeAndFocus(e, index)}
                  inputRef={(e: HTMLInputElement | null) =>
                    (inputRefs.current[index] = e)
                  }
                />
              </div>
            ))}
          </div>
        )}
        {showButtons && (
          <div className="pl-56 pr-4 flex mt-20">
            <Button
              sizes="small"
              colors="yellow"
              onClick={() => onClick}
            >
              다음
            </Button>
          </div>
        )}
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col gap-3">
          <div className="text-center">
            <Typo tag="h2" fonts="korea" sizes="xLarge" fontColor="green">
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
