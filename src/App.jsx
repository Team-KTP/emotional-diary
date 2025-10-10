import { useReducer, useRef, createContext } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import { getEmotionImage } from "./util/get-emotion-image";

const mockData = [
  {
    id: 1,
    emotionId: 1,
    content: "오늘의 일기 1번",
    createdAt: new Date("2025-10-10").getTime(),
  },
  {
    id: 2,
    emotionId: 2,
    content: "오늘의 일기 2번",
    createdAt: new Date("2025-10-09").getTime(),
  },
  {
    id: 3,
    emotionId: 3,
    content: "오늘의 일기 3번",
    createdAt: new Date("2025-09-10").getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        // 혹시 모를 id의 타입이 다를 수 있으니 String으로 통일
        String(item.id) === String(action.data.id) ? { ...action.data } : item
      );
    case "REMOVE":
      return state.filter(
        (item) => String(item.id) !== String(action.targetId)
      );
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // 일기 데이터 관리를 위해 useReducer 사용
  const [data, dispatch] = useReducer(reducer, mockData);
  const dataId = useRef(3);

  // 일기 추가
  const onCreate = (emotionId, content, createdAt) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current++,
        emotionId: emotionId,
        content: content,
        createdAt: createdAt,
      },
    });
  };

  // 일기 수정
  const onUpdate = (id, emotionId, content, createdAt) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: id,
        emotionId: emotionId,
        content: content,
        createdAt: createdAt,
      },
    });
  };

  // 일기 삭제
  const onRemove = (id) => {
    dispatch({ type: "REMOVE", targetId: id });
  };

  // context를 사용한 이유는 props drilling을 피하기 위해서
  // context를 사용하지 않는다면 Home -> DiaryList -> DiaryItem -> Button 으로 props를 넘겨줘야함
  // context를 사용하면 최상위 컴포넌트인 App에서 context를 제공하고, 필요한 하위 컴포넌트에서 context를 사용하면 됨
  // context를 사용하면 props를 일일이 넘겨줄 필요가 없어서 편리함
  // 단점은 컴포넌트가 많아지면 어떤 컴포넌트에서 context를 사용하는지 파악하기 어려울 수 있음
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onRemove, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Routes />
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
    // 설정해 둔 경로가 아닌 다른 경로 접근 시 NotFound 컴포넌트 렌더링
  );
}

export default App;

// 정리

// Routes : 여러 Route 컴포넌트를 감싸서 라우팅을 관리하는 역할 Routes안에는 Route 컴포넌트만 들어갈수있다.
// Route : 각각의 경로와 해당 경로에 매핑되는 컴포넌트를 정의
// path : URL 경로를 지정
// element : 해당 경로에 매핑되는 컴포넌트를 지정

// Link : 페이지 이동을 위한 컴포넌트, a태그와 비슷하지만 새로고침 없이도 페이지 이동 가능
// 내부 링크를 생성할 떄 사용
// to : 이동할 경로를 지정

// useReducer : 상태 관리를 위한 훅, 복잡한 상태 로직을 다룰 때 유용
// useRef : 변경 가능한 참조를 생성하는 훅, 주로 DOM 요소에 접근하거나 변경 가능한 값을 저장할 때 사용

// createContext : Context API를 사용하여 전역 상태를 관리하는 데 사용
// provider : Context의 값을 하위 컴포넌트에 제공하는 역할
// Context API : 컴포넌트 트리 전체에 데이터를 전달할 수 있는 방법, props drilling을 피할 수 있음
