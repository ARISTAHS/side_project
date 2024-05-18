import "../style/style.css";

import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
// import Main from "./routes/main";

export default function WrapLayout() {
  return (
    <>
      <div id="wrap">
        <Header />

        <div className="container">
          <div className="content_wrap">
            <ul>
              <li>
                <Link href='../Cost/realCost'><span>부동산 실거래</span></Link>
              </li>
              <li>
                <Link href='../Cost/rentCost'><span>부동산 전월세</span></Link>
              </li>
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
