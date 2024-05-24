// "use client" 
//CSR 형식을 사용하려면 필수

// import { headers } from "next/headers"
import Link from "next/link";
import "@/style/style.css";
import Image from "next/image";
import logo from "/public/logo_image.png";

export default function headers(){
  return(
    <> 
      <header id="header">
        <h1>
          <Link href="/">
            <Image src={logo} alt="로고 이미지" />
          </Link>
        </h1>
        
        <nav id="nav">
          <ul className="nav_wrap">
            <li>
              <Link href="../Cost/realCost">
                <span>실거래가</span>
              </Link>
            </li>
            <li>
              <Link href="../Cost/rentCost">
                <span>전월세</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>미정</span>
              </Link>
            </li>
            <li>
              <Link href="../login">
                <span>login</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}



