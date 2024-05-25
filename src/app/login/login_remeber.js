"use client" 

import { useEffect } from "react"

export default function LoginRemember(){
  useEffect(()=>{
    // 저장된 쿠키값을 가져와서 ID 칸에 넣어준다. 쿠키값 없으면 공백.
    let userLoginId = getCookie("userLoginId");
    document.getElementById("user_id").value = userLoginId;

    // ID가 있는 경우 아이디 저장 체크박스 체크
    if (document.getElementById("user_id").value !== "") {
      document.getElementById("checkId").checked = true;
    }

    // 아이디 저장하기 체크박스 onchange
    let checkId = document.getElementById("checkId");

    checkId.onchange = function (event) {
      event.preventDefault(); // 기본 클릭 동작 막음
      if (checkId.checked) { //checked true
        let userLoginId = document.getElementById("user_id").value;
        setCookie("userLoginId", userLoginId, 30); // 30일 동안 쿠키 보관
      } else { //checked false
        deleteCookie("userLoginId");
      }
    };

    // 아이디 저장하기가  눌린상태에서, ID를 입력한 경우
    let idInput = document.getElementById("user_id");

    idInput.addEventListener("keyup", function (event) {
      event.preventDefault(); // 기본 클릭 동작 막음
      if (checkId.checked) { //checked true
        let userLoginId = document.getElementById("user_id").value;
        setCookie("userLoginId", userLoginId, 30); // 30일 동안 쿠키 보관
      }
    });
  },[]); //한번만 실행

  function setCookie(cookieName, value, exdays) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    // var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toGMTString());
    // escape 와 unescape 함수 사용 안함. 함수 변경
    let cookieValue = encodeURIComponent(value) + ((exdays == null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
  }

  function deleteCookie(cookieName) {
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
  }

  function getCookie(cookieName) {
    cookieName = cookieName + '=';
    let cookieData = document.cookie;
    let start = cookieData.indexOf(cookieName);
    let cookieValue = '';
    if (start != -1) {
      start += cookieName.length;
      let end = cookieData.indexOf(';', start);
      if (end == -1) end = cookieData.length;
      // cookieValue = cookieData.substring(start, end);
      cookieValue = decodeURIComponent(cookieData.substring(start, end));
    }
    // return unescape(cookieValue);  // escape 와 unescape 함수 사용 안함. 함수 변경
    return cookieValue;
  }

  return null; // useEffect 안에서 DOM 조작만을 수행하므로 반환값은 null입니다.

}