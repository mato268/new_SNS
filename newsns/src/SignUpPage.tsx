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
    <div className="bg-deepdark w-full gap-6 h-full flex justify-center flex-col">
      <div className="px-9 text-center -mt-36">
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
          rightNode="iconName1"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={onNicknameChange}
          variant="outline"
        />
        <Input
          type="text"
          sizes="large"
          colors="white"
          rightNode="iconName2"
          placeholder="이메일을 입력해주세요"
          variant="outline"
        />
      </div>
      <div className="pl-52 pr-7 -mt-7 flex">
        <Button sizes="Confirmed" colors="yellow">
          인증코드발송
        </Button>
      </div>
    </div>
  );
}
