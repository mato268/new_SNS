import { MouseEvent } from "react";
import { Button } from "./components/Button";
import Typo from "./components/Typo";
import { Link } from "react-router-dom";

export default function LogIn() {
  function onClick(e: MouseEvent<HTMLButtonElement, MouseEvent>) {}

  return (
    <div className="bg-deepdark w-width sm:w-xWidth md:w-xLwidth h-height sm:h-xheight md:h-xLheight flex justify-center fixed">
      <div className="absolute top-1/2 -mt-48 h-full space-y-8">
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
