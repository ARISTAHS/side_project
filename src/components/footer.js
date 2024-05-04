"use client" //CSR 형식을 사용하려면 필수

import "../style/style.css"
import Image from "next/image";

export default function footer(){
  return(
    <>
      <footer id="footer">
        <div className="footer_logo">
           <Image src="" alt="푸터 영역의 로고" />
        </div>
        <div className="address_wrap">
          <address>
            <p></p>
            <p></p>
            <span className="copyright"> </span>
          </address>
        </div>
        <div className="another_wrap">
          <span>미정</span>
        </div>
      </footer>
    </>
  );
}