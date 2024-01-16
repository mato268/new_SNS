import { Button } from "./component/Button";

function App() {
  return (
    <main>
      {/*버튼 구분하기 위함*/}
      <div style={{ backgroundColor: "blue", width: "390px", height: "200px" }}>
        <div className="w-buttonLarge h-buttonLarge">
          <Button size="large" color="white" hover="yes">
            로그인
          </Button>
        </div>
        <Button size="medium" color="deepdark" hover="no">
          로그인
        </Button>
        <Button size="small" color="deepdark" hover="yes">
          새 계정
        </Button>
        <Button size="small" color="yellow" hover="yes">
          다음
        </Button>
        <Button size="Confirmed" color="yellow" hover="no">
          인증코드발송
        </Button>
      </div>
    </main>
  );
}

export default App;
