import "../style/style.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Content from "./routes/content";

export default function Main() {
  return (
    <>
      <div id="wrap">
        <Header />
        <div className="container">
          <Content/>
        </div>
        <Footer />
      </div>
    </>
  );
}
