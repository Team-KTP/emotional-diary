import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  //BrowserRouter : 현재 브라우저의 URL을 감지하여 라우팅을 처리 역할
  //즉, URL이 변경될 때마다 해당 URL에 맞는 컴포넌트를 렌더링
  // BrowserRouter
  // 는 React에서 라우팅(페이지 이동)을 관리해주는 컴포넌트입니다.
  // 웹 브라우저의 주소(URL)을 기반으로 어떤 컴포넌트(페이지)를 보여줄지 결정합니다.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
