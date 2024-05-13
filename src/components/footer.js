// "use client" 
//CSR 형식을 사용하려면 필수

import "../style/style.css"
import TopMove from "./topBtn";
// import Image from "next/image";

export default function footer(){
  return(
    <>
      <TopMove/>
      <footer id="footer">
        {/* <div className="footer_logo">
           <Image src="" alt="푸터 영역의 로고" />
        </div> */}
        <div className="address_wrap">
          <address>
            <p>개인 포트폴리오를 위한 작업물입니다.</p>
            <p>영리 목적이 아닌 개인 포트폴리오 입니다.</p>
            <span className="copyright">Copyright ⓒ 2024. ARISTAHS All rights reserved.</span>
          </address>
        </div>
        {/* <div className="another_wrap">
          <span>미정</span>
        </div> */}
      </footer>
    </>
  );
}