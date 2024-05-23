import CostPage from "./page";

export default function CostLayout({children}){
  return(
    <>
      <CostPage></CostPage>
      {children}
    </>
  );
}