import { Button } from "./component/Button";

function App() {
  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {}

  return (
    <main>
      {/*버튼 구분하기 위함*/}
      <div style={{ backgroundColor: "blue", width: "390px", height: "200px" }}>
          <Button
            size="large"
            color="white"
            hover="yes"
            onClick={() => onClick}
            asdf="asdf"
          >
            로그인
          </Button>
        <Button
          size="medium"
          color="deepdark"
          hover="no"
          onClick={() => onClick}
        >
          로그인
        </Button>
        <Button
          size="small"
          color="deepdark"
          hover="yes"
          onClick={() => onClick}
        >
          새 계정
        </Button>
        <Button size="small" color="yellow" hover="yes" onClick={() => onClick}>
          다음
        </Button>
        <Button
          size="Confirmed"
          color="yellow"
          hover="no"
          onClick={() => onClick}
        >
          인증코드발송
        </Button>
      </div>
    </main>
  );
}

export default App;
