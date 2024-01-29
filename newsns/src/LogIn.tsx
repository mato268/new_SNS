import { Button } from "./components/Button";
import Typo from "./components/Typo";

export default function LogIn() {
  return (
    <div className="bg-deepdark w-width h-height fixed">
      <div className="absolute top-1/2 -mt-48 mx-auto my-0">
        <Typo
          fonts="korea"
          sizes="large"
          weights="normal"
          lineHeight="default"
          fontColor="yellow"
        >
          print("Hello 갭잘알")
        </Typo>
        <Button sizes="large" colors="white" variant="default">
          <Typo
            fonts="korea"
            sizes="large"
            weights="normal"
            lineHeight="default"
            fontColor="deepdark"
          >
            로그인
          </Typo>
        </Button>
        <Button sizes="large" colors="white" variant="hover">
          <Typo
            fonts="korea"
            sizes="large"
            weights="normal"
            lineHeight="default"
            fontColor="deepdark"
          >
            로그인
          </Typo>
        </Button>
      </div>
    </div>
  );
}
