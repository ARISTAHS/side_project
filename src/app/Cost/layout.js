import CostPage from "./page";
// import TopMove from "@/components/topBtn";

export default function CostLayout({children}){
  return(
    <>
      <CostPage></CostPage>
      {/* <TopMove></TopMove> */}
      {children}
    </>
  );
}