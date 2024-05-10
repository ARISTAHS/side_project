
// import {fetchData} from "@/api/fetchData";

export async function getServerSideProps(context) {
  try {
    // 데이터 가져오기
    const Data = await fetchData();

    return {
      props: {
        Data
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null
      }
    };
  }

}