import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "./DiaryList";

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
