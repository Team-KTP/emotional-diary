import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "./DiaryList";

// 바깥으로 뺸 이유는 컴포넌트가 리렌더링 될 때마다 함수가 새로 생성되는 것을 방지, 가독성을 위해서
// 매개변수만으로도 필요한 데이터를 알 수 있다면 바깥으로 빼는 것이 좋음
const getMonthRange = (pivotDate, diaryList) => {
  return diaryList.filter((item) => {
    const itemDate = new Date(item.createdAt);
    return (
      itemDate.getFullYear() === pivotDate.getFullYear() &&
      itemDate.getMonth() === pivotDate.getMonth()
    );
  });
};

const Home = () => {
  // useContext로 context에 접근
  const diaryList = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const filteredDiaryList = getMonthRange(pivotDate, diaryList);
  console.log(filteredDiaryList);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList diaryList={filteredDiaryList} />
    </div>
  );
};

export default Home;
