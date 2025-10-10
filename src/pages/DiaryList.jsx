import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../components/Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedDiaryList = () => {
    return diaryList.toSorted((a, b) => {
      if (sortType === "latest") {
        return b.createdAt - a.createdAt;
      } else {
        return a.createdAt - b.createdAt;
      }
    });
  };

  const sortedDiaryList = getSortedDiaryList();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button
          onClick={() => navigate("/new")}
          text={"새 일기쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {sortedDiaryList.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
