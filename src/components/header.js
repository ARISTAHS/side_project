"use client" //CSR 형식을 사용하려면 필수

// import { headers } from "next/headers"
import Link from "next/link"
import "../style/style.css" 
import Image from "next/image";

export default function headers({ children }){
  return(
    <> 
      <header id="header">
        <h1>
          <Link href="/">
            <Image src="" alt="로고 이미지 자리" />
          </Link>
        </h1>
        
        <nav id="nav">
          <ul className="nav_wrap">
            <li>
              <Link href="/">
                <span>메뉴1</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>메뉴2</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>설명</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>소개</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}



