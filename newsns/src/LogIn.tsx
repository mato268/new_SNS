import { Button } from "./components/Button";
import { Input } from "./components/Input";
import Typo from "./components/Typo";
import Modal from "./components/Modal";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

const apiPath = process.env.REACT_APP_API_PATH || "";

export const LogIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onLogIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(apiPath + "sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("제출 실패");
      }

      if (data.success) {
        console.log("성공");
      } else {
        console.log(`${data.message}`);
        setModalOpen(true);
      }
    } catch (error) {
      console.error("실패:", error);
      setModalOpen(true);
    }
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  return (
    <div className="bg-deepdark w-full h-full flex justify-center flex-col py-32 gap-9">
      <form onSubmit={onLogIn}>
        <div className="bg-yellow w-full h-full flex flex-col py-28 px-7 gap-4 rounded-full">
          <Input
            type="email"
            sizes="large"
            colors="white"
            placeholder="이메일"
            value={email}
            onChange={onEmailChange}
            variant="lgOutline"
          />
          <Input
            type="password"
            sizes="large"
            colors="white"
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordChange}
            variant="lgOutline"
            maxLength={6}
          />
          <div className="w-full px-24">
            <Button sizes="small" colors="deepdark">
              로그인
            </Button>
          </div>
        </div>
      </form>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col gap-3">
          <div className="text-center">
            <Typo tag="h2" fonts="korea" sizes="xLarge" fontColor="red">
              로그인 실패
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
              계정을 찾을 수 없습니다<br></br>새 계정을 만드시겠습니까?
            </Typo>
          </div>
          <div className="w-full gap-7 h-full flex justify-between">
            <Button
              sizes="small"
              colors="deepdark"
              onClick={() => setModalOpen(false)}
            >
              취소
            </Button>
            <Link className="w-full" to={"/signUp"}>
              <Button sizes="small" colors="deepdark">
                새 계정
              </Button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};
