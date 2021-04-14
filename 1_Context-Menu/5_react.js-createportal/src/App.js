import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import Detail from "./Detail";
import dummyData from "./dummyData";
import ContextPortal from "./ContextPortal";

// html, css로 해결할 수 있는 로직은 js로 처리하지 않는것이 좋다.
// 1. js가 동작하지 않는 경우에도 완결성 있는 페이지를 보여줄 수 있다.
// 2. 복잡한 컴포넌트를 개발할 때 개발자의 js 역량 보다는 html, css에서 검증된 기능을 활용하는 것이 안정성, 신뢰성이 높다.
// 3. js 코드량이 줄어든다.

export default function App() {
  const [openedIndex, setOpen] = useState(null);
  const detailRefs = useRef([]);

  const togglePopover = index => e => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(e.target.parentElement.open ? null : index);
  };

  const closeAll = () => {
    setOpen(null);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        {dummyData.map(({ text, context }, i) => (
          <Detail
            key={`detail${i}`}
            ref={r => (detailRefs.current[i] = r)}
            text={text}
            context={context}
            open={openedIndex === i}
            onToggle={togglePopover(i)}
          />
        ))}
      </div>

      <ContextPortal
        target={detailRefs.current[openedIndex]}
        children={<p>{dummyData[openedIndex]?.context}</p>}
      />
    </>
  );
}
