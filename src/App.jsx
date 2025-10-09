import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

// 1. "/" : 모든 일기를 조회하는 페이지
// 2. "/new" : 새로운 일기를 작성하는 페이지
// 3. "/diary" : 특정 일기의 상세 페이지
// react에서는 페이지를 컴포넌트로 관리 하기에 각 페이지를 컴포넌트로 만들어야 함

function App() {
  return (
    // Routes : 여러 Route 컴포넌트를 감싸서 라우팅을 관리하는 역할 Routes안에는 Route 컴포넌트만 들어갈수있다.
    // Route : 각각의 경로와 해당 경로에 매핑되는 컴포넌트를 정의
    // path : URL 경로를 지정
    // element : 해당 경로에 매핑되는 컴포넌트를 지정
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    // 설정해 둔 경로가 아닌 다른 경로 접근 시 NotFound 컴포넌트 렌더링
  );
  <Routes />;
}

export default App;
