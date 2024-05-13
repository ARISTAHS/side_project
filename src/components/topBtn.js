"use client"

import { useState, useEffect } from "react";

export default function TopMove(){

  const [showBtn, setShowBtn] = useState(false); //기본 버튼 안보이기

  //sroll 높이 따라 보이게 하는 함수
  function scrollTop(){
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  console.log(scrollTop);

  useEffect(()=>{
    function showBtnClick(){
      if (window.scrollY > 400){
        setShowBtn(true)
      }else{
        setShowBtn(false)
      }
    }
    console.log(showBtnClick);
    
    window.addEventListener("scroll", showBtnClick)
    
    return ()=>{
      window.removeEventListener("scroll", showBtnClick)
    }

  },[])

  return(
    <>
      {showBtn &&
        <div id="top_btn">
          <button className="btn" type="button" onClick={scrollTop}>
            <span>TOP</span>
          </button>
        </div>
      }
    </>
  );
}