import { Button } from "./components/Button";
import { Input } from "./components/Input";
import Typo from "./components/Typo";
import Modal from "./components/Modal";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ConfirmIcon } from "./icons/confirm.svg";
import { ReactComponent as ErrorIcon } from "./icons/error.svg";

const apiPath = process.env.REACT_APP_API_PATH || "";

export default function SignUpPagePassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] =
    useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [showButtons, setShowButtons] = useState<boolean>(false);

  const onSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(apiPath + "sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("제출 실패");
      }

      console.log("성공");
      console.log(data);
      console.log(password);
    } catch (error) {
      console.error("실패:", error);
    }
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length === 1) {
      setPasswordErrorMessage("/*6글자까지 가능합니다*/");
    } else {
      setPasswordErrorMessage("");
    }
  };

  const onPasswordConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordConfirm(value);

    if (password === value) {
      setPasswordConfirmErrorMessage("");
      setShowButtons(true);
    } else {
      setPasswordConfirmErrorMessage("/*비밀번호가 동일하지 않습니다*/");
      setShowButtons(false);
    }
  };

  return (
    <div className="bg-deepdark w-full gap-6 h-full flex justify-center flex-col">
      <div className={`px-9 text-center ${showButtons ? "-mt-12" : "-mt-28"}`}>
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
          {passwordErrorMessage}
        </Typo>
        {password && passwordConfirm && password !== passwordConfirm && (
          <Typo tag="p" fonts="korea" sizes="small" fontColor="red">
            {passwordConfirmErrorMessage}
          </Typo>
        )}
      </div>
      <div className="flex px-7 -mt-6 justify-center flex-col">
        <Input
          type="password"
          sizes="large"
          colors="white"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={onPasswordChange}
          variant="lgOutline"
          maxLength={6}
        />
      </div>
      <div className="flex mt-2 px-7 justify-center flex-col">
        <form onSubmit={onSignUp}>
          <Input
            type="password"
            sizes="large"
            colors="white"
            rightNode={
              (password && password === passwordConfirm && <ConfirmIcon />) ||
              (password && passwordConfirm && password !== passwordConfirm && (
                <ErrorIcon />
              ))
            }
            placeholder="비밀번호를 재입력해주세요"
            value={passwordConfirm}
            onChange={onPasswordConfirmChange}
            variant="lgOutline"
            maxLength={6}
          />
          <div
            className={`pl-56 pr-4 flex mt-48 relative top-6 ${
              showButtons ? "mb-5" : ""
            }`}
          >
            {showButtons && (
              <Button
                sizes="small"
                colors="yellow"
                onClick={() => setModalOpen(true)}
              >
                다음
              </Button>
            )}
          </div>
        </form>
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
