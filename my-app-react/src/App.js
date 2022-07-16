import "./App.scss";
import {
  Post,
  ANAKIN_IMAGE,
  RAY_IMAGE,
  Chewbacca_IMG,
  Loreal_IMG,
} from "./components/postAuthor";

function App() {
  return (
    <div className="App">
      <Post
        author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 февр."}
        like={"598"}
      />
      <Post
        author={{
          name: "Chewbacca",
          photo: Chewbacca_IMG,
          nickname: "@Big_boss",
        }}
        content="WTF?Luke...?"
        image={Loreal_IMG}
        date={"26 февр."}
        like={"100000"}
      />
    </div>
  );
}

export default App;
