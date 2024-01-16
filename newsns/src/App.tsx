import { Input } from "./component/Input";

function App() {
  return (
    <main>
      {/*인풋 구분하기 위함*/}
      <div style={{ backgroundColor: "blue", width: "390px", height: "200px" }}>
        <Input
          type="text"
          size="large"
          color="white"
          rounded="yes"
          placeholder="닉네임을 입력해주세요"
        ></Input>
        <Input
          type="text"
          size="medium"
          color="white"
          rounded="yes"
          placeholder="댓글을 입력해주세요"
        ></Input>
        <Input
          type="text"
          size="small"
          color="transparent"
          rounded="no"
          placeholder="제목을 입력해주세요"
        ></Input>
      </div>
    </main>
  );
}

export default App;
