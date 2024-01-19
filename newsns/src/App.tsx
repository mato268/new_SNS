import { Input } from "./component/Input";

function App() {
  return (
    <main>
      {/*인풋 구분하기 위함*/}
      <div style={{ backgroundColor: "blue", width: "390px", height: "200px" }}>
        <Input
          type="text"
          sizes="large"
          color="white"
          rightNode="iconName1"
          placeholder="닉네임을 입력해주세요"
          variant="default"
        ></Input>
        <Input
          type="text"
          sizes="medium"
          color="white"
          rightNode="iconName2"
          placeholder="댓글을 입력해주세요"
          variant="default"
        ></Input>
        <Input
          type="text"
          sizes="small"
          color="transparent"
          rightNode="no"
          placeholder="제목을 입력해주세요"
          variant="default"
        ></Input>
      </div>
    </main>
  );
}

export default App;
