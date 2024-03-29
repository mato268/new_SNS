import { MouseEvent } from "react";
import { Button } from "./components/Button";
import Typo from "./components/Typo";
import { Link } from "react-router-dom";

export default function Home() {
  const onClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {};

  return (
    <div className="bg-deepdark w-full gap-9 h-full flex justify-center flex-col">
      <div className="px-9">
        <Typo
          tag="h1"
          fonts="korea"
          sizes="xLarge"
          weights="normal"
          lineHeight="default"
          fontColor="yellow"
        >
          print("Hello 갭잘알")
        </Typo>
      </div>
      <div className="flex px-7 justify-center flex-col gap-6">
        <Link className="w-full" to={"/logIn"}>
          <Button sizes="large" colors="white" onClick={() => onClick}>
            로그인
          </Button>
        </Link>
        <Link className="w-full" to={"/signUp"}>
          <Button sizes="large" colors="white" onClick={() => onClick}>
            회원가입
          </Button>
        </Link>
      </div>
    </div>
  );
}
