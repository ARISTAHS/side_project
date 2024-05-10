"use client"

import {fetchData} from "@/api/fetchData"; // fetchData 연결
import { useEffect, useState } from "react";

export default function Content(){
  
  const [data , setData] = useState(null);
  
  useEffect(() => {
    const fetchDataFromAPI = async ()=>{
      try{
        const result = await fetchData();
        // console.log('result')
        console.log(result)
        setData(result.tbLnOpendataRtmsV.row); // 데이터 설정
      }catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
      }
    }

    fetchDataFromAPI(); // 데이터 가져오기 함수 호출
  }, []);

  // useEffect(() => {
  //   if (Data) {
  //     setData(fetchData.tbLnOpendataRtmsV.row);
  //   }
  // }, [Data]);

  return(
    <>
     {data && (
      <div className="table_wrap">
        <h2>부동산 실거래가 정보</h2>
        <table>
          <colgroup>
            <col width='auto'></col>
            <col width='auto'></col>
            <col width='auto'></col>
            <col width='auto'></col>
            <col width='15%'></col>
            <col width='auto'></col>
            <col width='auto'></col>
            <col width='auto'></col>
            <col width='auto'></col>
          </colgroup>
          <thead>
            <tr>
              <th>년도</th>
              <th>자치구명</th>
              <th>건물용도</th>
              <th>법정동코드</th>
              <th>건물명</th>
              <th>계약일</th>
              <th>거래금액</th>
              <th>건물면적</th>
              <th>토지면적</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.ACC_YEAR}</td>
                <td>{item.SGG_NM}</td>
                <td>{item.BJDONG_CD}</td>
                <td>{item.HOUSE_TYPE}</td>
                <td>{item.BLDG_NM}</td>
                <td>{item.DEAL_YMD}</td>
                <td>{item.OBJ_AMT}</td>
                <td>{item.BLDG_AREA}</td>
                <td>{item.TOT_AREA}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    </>
  );
}
