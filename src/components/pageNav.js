"use client"

import Link from "next/link";
import "../style/pageNav.css "


export default function PageNav(){

  const totalCount = 500; //불러오는 table 정보 전체 갯수
  const currentPage = 1 ; //현재 페이지 
  const pageCount = 50 ; // 화면에 표시할 갯수
  const limit = 5; // 한 페이지당 표시할 데이터 갯수

  const totalPage = Math.ceil(totalCount/limit); 
 
  return(
    <div className="page_nav">
      <ul>
        <li><Link href=""><span>Prev</span></Link></li>
        <li><Link href="">1</Link></li>
        <li><Link href="">2</Link></li>
        <li><Link href="">3</Link></li>
        <li><Link href=""><span>Next</span></Link></li>
      </ul>
    </div>
  );
}