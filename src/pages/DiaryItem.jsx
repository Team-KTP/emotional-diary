import { getEmotionImage } from "../util/get-emotion-image";
import Button from "../components/Button";

import "./DiaryItem.css";

const DiaryItem = () => {
  const emotionId = 1;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(1)} />
      </div>
      <div className="info_section">
        <div className="created_at">{new Date().toLocaleDateString()}</div>
        <div className="content">오늘의 일기 1번</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기 "} />
      </div>
    </div>
  );
};

export default DiaryItem;
