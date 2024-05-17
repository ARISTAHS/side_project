import Link from "next/link";

export default function Content(){
  
  return(
    <div className="content_wrap">
      <ul>
        <li>
          <Link href='../Cost/realCost.js'><span>부동산 실거래</span></Link>
        </li>
        <li>
          <Link href='../Cost/rentCost.js'><span>부동산 전월세</span></Link>
        </li>
      </ul>
    </div>
  );
}
