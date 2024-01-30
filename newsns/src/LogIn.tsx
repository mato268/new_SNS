import { MouseEvent } from "react";
import { Button } from "./components/Button";
import Typo from "./components/Typo";
import { Link } from "react-router-dom";

export default function LogIn() {
  function onClick(e: MouseEvent<HTMLButtonElement, MouseEvent>) {}

  return (
    <div className="bg-deepdark w-width h-height fixed">
      <div className="absolute top-1/2 -mt-48 mx-auto my-0 right-8 space-y-8">
        <Typo
          tag="strong"
          fonts="korea"
          sizes="xLarge"
          weights="normal"
          lineHeight="default"
          fontColor="yellow"
        >
          print("Hello 갭잘알")
        </Typo>
        <div>
          <Button sizes="large" colors="white" onClick={() => onClick}>
            로그인
          </Button>
        </div>
        <div>
          <Link to={"/signUP"}>
            <Button sizes="large" colors="white" onClick={() => onClick}>
              회원가입
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
