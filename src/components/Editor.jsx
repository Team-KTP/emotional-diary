import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const emotionList = [
  { emotionId: 1, description: "완전 좋음" },
  { emotionId: 2, description: "좋음" },
  { emotionId: 3, description: "보통" },
  { emotionId: 4, description: "나쁨" },
  { emotionId: 5, description: "매우 나쁨" },
];

//Editor 컴포넌트는 일기 생성과 수정에서 쓰이는 공통 컴포넌트이기에 상황에 따라 다른 함수를 받아야 해서 props로 받음
const Editor = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    emotionId: 3,
    content: "",
    createdAt: new Date(),
  });

  const getStringedDate = (date) => {
    // YYYY-MM-DD 형태로 변환
    return date.toISOString().slice(0, 10);
  };

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // date 타입은 value가 string이므로 Date 객체로 변환
    if (name === "createdAt") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmit = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdAt"
          onChange={onChangeInput}
          value={getStringedDate(input.createdAt)}
          type="date"
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>

        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          onChange={onChangeInput}
          value={input.content}
          placeholder="오늘은 어땠나요?"
        />
      </section>

      <section className="button_section">
        <Button onClick={() => navigate(-1)} text={"취소하기"} />
        <Button onClick={onClickSubmit} text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
