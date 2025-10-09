import { useSearchParams } from "react-router-dom";

const Home = () => {
  // useSearchParams : URL의 쿼리 매개변수를 읽고 수정하는 역할
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("value")); // 쿼리 매개변수 value의 값을 가져옴

  return <h1>Home Page</h1>;
};

export default Home;
