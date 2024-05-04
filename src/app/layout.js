
import "../style/globals.css";
import Header from "../components/header";

export const metadata = {
  title: "title 미정",
  description: "Generated by create jhs",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
