"use client"

// import '../style/topBtn.css';
import { useState, useEffect } from "react";

export default function TopMove(){

  const [showBtn, setShowBtn] = useState(false); //기본 버튼 안보이기

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // 일정 위치 이상으로 스크롤되면 버튼 보이기
    setShowBtn(currentScrollY > 100);
    
    // if (scrollTop > 200) {
    //   setShowBtn(true);
    // } else {
    //   setShowBtn(false);
    // }
  };

   // 페이지 로드 후 스크롤 이벤트 등록
   useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(handleScroll);
  console.log(showBtn);
  

  // 최상단으로 스크롤 이동하는 함수
  function scrollTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return(
    <>
      <div id="top_btn">
        <button className={ `${showBtn ? 'hidden': 'btn'}`} type="button" onClick={scrollTop}>
          <p>TOP</p>
        </button>
      </div>
    </>
  );
}