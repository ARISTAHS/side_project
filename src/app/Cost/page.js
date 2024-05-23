import "@/style/style.css";
import "@/style/table.css";
import RealCost from "./realCost/page";
import RentCost from "./rentCost/page";

export default function CostPage(){
  return(
    <>
      <RealCost />
      <RentCost />
    </>
  );
}