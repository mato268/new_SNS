import { Button } from "./component/Button";

function App() {
  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {}

  return (
    <main>
      {/*버튼 구분하기 위함*/}
      <div style={{ backgroundColor: "blue", width: "390px", height: "200px" }}>
        <Button size="large" colors="white" onClick={() => onClick}>
          로그인
        </Button>
        <Button size="medium" colors="deepdark" onClick={() => onClick}>
          로그인
        </Button>
        <Button size="small" colors="deepdark" onClick={() => onClick}>
          새 계정
        </Button>
        <Button size="small" colors="yellow" onClick={() => onClick}>
          다음
        </Button>
        <Button size="Confirmed" colors="yellow" onClick={() => onClick}>
          인증코드발송
        </Button>
      </div>
    </main>
  );
}

export default App;
