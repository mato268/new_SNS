import { Button } from "./components/Button";
import { Input } from "./components/Input";
import Typo from "./components/Typo";

export default function SignUpPage() {
  return (
    <div className="bg-deepdark w-width h-height fixed">
      <div className="absolute top-1/2 -mt-64 text-center mx-auto my-0 space-y-8">
        <Typo fonts="korea" sizes="large" weights="normal" fontColor="yellow">
          "/*회원가입을 환영해*/"
        </Typo>
        <Input
          type="text"
          sizes="large"
          colors="white"
          rightNode="iconName1"
          placeholder="닉네임을 입력해주세요"
          variant="outline"
        ></Input>
        <Input
          type="text"
          sizes="large"
          colors="white"
          rightNode="iconName1"
          placeholder="이메일을 입력해 주세요"
          variant="outline"
        ></Input>
        <div className="absolute right-7">
          <Button sizes="Confirmed" colors="yellow" variant="hover">
            인증코드발송
          </Button>
        </div>
      </div>
    </div>
  );
}
