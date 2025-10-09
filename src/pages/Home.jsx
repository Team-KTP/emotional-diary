import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "./DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2025년 10월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
