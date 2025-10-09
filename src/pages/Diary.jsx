import { useParams } from "react-router-dom";

const diary = () => {
  // useParams : URL 경로의 매개변수를 추출하는 역할
  const prams = useParams();
  console.log(prams);
  return <h1>Diary Page</h1>;
};

export default diary;
