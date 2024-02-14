import { Button } from "./components/Button";
import { Input } from "./components/Input";
import Typo from "./components/Typo";
import Modal from "./components/Modal";
import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ConfirmIcon } from "./icons/confirm.svg";
import { ReactComponent as ErrorIcon } from "./icons/error.svg";

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] =
    useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [showButtons, setShowButtons] = useState<boolean>(false);

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (password.length === 6) {
      setPasswordErrorMessage("");
    } else {
      setPasswordErrorMessage("/*6글자까지 가능합니다*/");
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
      <div className={`px-9 text-center ${showButtons ? "-mt-6" : "-mt-20"}`}>
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
        {password.length === 0 && (
          <Typo tag="p" fonts="korea" sizes="small" fontColor="green">
            {passwordErrorMessage}
          </Typo>
        )}
        {password && passwordConfirm && password !== passwordConfirm && (
          <Typo tag="p" fonts="korea" sizes="small" fontColor="red">
            {passwordConfirmErrorMessage}
          </Typo>
        )}
      </div>
      <div className="flex px-7 -mt-6 justify-center flex-col">
        <Input
          type="text"
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
        <form>
          <Input
            type="text"
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
            className={`pl-56 pr-4 flex mt-48 relative top-2 ${
              showButtons ? "mb-2" : "-mb-1"
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
