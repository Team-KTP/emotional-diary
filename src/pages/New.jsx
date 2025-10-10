import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = (input) => {
    onCreate(input.emotionId, input.content, input.createdAt.getTime());
    // 작성 완료 후 홈으로 이동, replace: true -> 뒤로 가기 했을 때 다시 이 페이지로 돌아오지 않도록
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Header
        title="새 일기쓰기"
        leftChild={<Button onClick={() => navigate(-1)} text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
