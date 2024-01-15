import { Button } from "./component/Button";

function App() {
  return (
    <main>
      {/*버튼 구분하기 위함*/}
      <div style={{ backgroundColor: "blue", width: "390px", height: "200px" }}>
        <Button size="large" color="large">
          로그인
        </Button>
        <Button size="medium" color="medium">
          로그인
        </Button>
        <Button size="small" color="small">
          새 계정
        </Button>
        <Button size="small" color="yellow">
          다음
        </Button>
        <Button size="Confirmed" color="Confirmed">
          인증코드발송
        </Button>
      </div>
    </main>
  );
}

export default App;
