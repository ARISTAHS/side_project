import "@/style/style.css"
import TopMove from "./topBtn";
import Image from "next/image";
import logo from "/public/logo_image.png";

export default function footer(){
  return(
    <>
      <footer id="footer">
        <TopMove/>
        <div className="footer_logo">
           <Image src={logo} alt="푸터 영역의 로고" />
        </div>
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