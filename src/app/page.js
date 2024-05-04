import "../style/style.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Main() {
  return (
    <>
      <div id="wrap">
        <Header />
        <div className="container">main 영역 확인</div>
        <Footer />
      </div>
    </>
  );
}
