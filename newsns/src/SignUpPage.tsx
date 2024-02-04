import { Button } from "./components/Button";
import { Input } from "./components/Input";
import Typo from "./components/Typo";
import { useState } from "react";
import { ChangeEvent } from "react";

export default function SignUpPage() {
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    <div className="bg-deepdark w-full h-full w-screen h-screen flex justify-center text-center items-center relative">
      <div className="absolute top-1/3 -mt-44 space-y-8">
        <Typo
          tag="h1"
          fonts="korea"
          sizes="xLarge"
          weights="normal"
          fontColor="yellow"
        >
          /*회원가입을 환영해*/
        </Typo>
        <div className="space-y-1">
          <div className="relative min-h-sm flex justify-start left-12">
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
          <Input
            type="text"
            sizes="large"
            colors="white"
            rightNode="iconName1"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={onNicknameChange}
            variant="outline"
          />
        </div>
        <div className="space-y-8">
          <Input
            type="text"
            sizes="large"
            colors="white"
            rightNode="iconName2"
            placeholder="이메일을 입력해 주세요"
            variant="outline"
          />
        </div>
        <div className="absolute right-8">
          <Button sizes="Confirmed" colors="yellow">
            인증코드발송
          </Button>
        </div>
      </div>
    </div>
  );
}
