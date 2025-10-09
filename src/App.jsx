import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";

import { getEmotionImage } from "./util/get-emotion-image";

// 1. "/" : 모든 일기를 조회하는 페이지
// 2. "/new" : 새로운 일기를 작성하는 페이지
// 3. "/diary" : 특정 일기의 상세 페이지
// react에서는 페이지를 컴포넌트로 관리 하기에 각 페이지를 컴포넌트로 만들어야 함

function App() {
  const nav = useNavigate();

  const onClickBtn = (path) => {
    nav(path);
  };
  return (
    // Routes : 여러 Route 컴포넌트를 감싸서 라우팅을 관리하는 역할 Routes안에는 Route 컴포넌트만 들어갈수있다.
    // Route : 각각의 경로와 해당 경로에 매핑되는 컴포넌트를 정의
    // path : URL 경로를 지정
    // element : 해당 경로에 매핑되는 컴포넌트를 지정

    // Link : 페이지 이동을 위한 컴포넌트, a태그와 비슷하지만 새로고침 없이도 페이지 이동 가능
    // 내부 링크를 생성할 떄 사용
    // to : 이동할 경로를 지정
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>
        <Link to="/notfound">NotFound</Link>
      </div>
      <div>
        <button onClick={() => onClickBtn("/")}>Home</button>
        <button onClick={() => onClickBtn("/new")}>New</button>
        <button onClick={() => onClickBtn("/diary")}>Diary</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Routes />
    </>
    // 설정해 둔 경로가 아닌 다른 경로 접근 시 NotFound 컴포넌트 렌더링
  );
}

export default App;
