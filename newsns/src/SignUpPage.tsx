import { Button } from "./components/Button";
import { Input } from "./components/Input";
import Typo from "./components/Typo";

export default function SignUpPage() {
  return (
    <div className="bg-deepdark w-width h-height fixed">
      <div className="absolute top-1/2 -mt-64 text-center mx-auto my-0 space-y-8">
        <Typo tag="h1" fonts="korea" sizes="xLarge" weights="normal" fontColor="yellow">
          /*회원가입을 환영해*/
        </Typo>
        <div className="space-y-8">
            <Input
              type="text"
              sizes="large"
              colors="white"
              rightNode="iconName1"
              placeholder="닉네임을 입력해주세요"
              variant="outline"
            ></Input>
        </div>
        <div className="space-y-8">
            <Input
              type="text"
              sizes="large"
              colors="white"
              rightNode="iconName2"
              placeholder="이메일을 입력해 주세요"
              variant="outline"
            ></Input>
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
