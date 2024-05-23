"use client"

//import "@/style/table.css"; //공용으로 page.js에 css 연결
import { fetchData2 } from "@/api/fetchData2";
import { useEffect, useState } from "react";

export default function RentCost(){

  const [data , setData] = useState(null);

  useEffect(()=>{

    const fetchDataAPI2 = async () => {
      try{
        const result = await fetchData2();
        console.log(result); // 데이터 확인

        setData(result.tbLnOpendataRentV.row); //데이터 RentV 안에 row
      }catch(error){
        console.log('API 데이터 호출 중 문제 발생.', error) 
      }
    }

    fetchDataAPI2(); //데이터 함수 호출
  }, []);

  return(
    <>
      {data && (
        <div className="table_wrap">
        <h2>부동산 전월세 정보</h2>
        <table>
          <colgroup>
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: '15%' }}></col> 
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: 'auto' }}></col>
          </colgroup>
          <thead>
            <tr>
              <th>접수연도</th>
              <th>자치구명</th>
              <th>지번구분명</th>
              <th>층</th>
              <th>계약일</th>
              <th>전월세 구분</th>
              <th>임대면적</th>
              <th>보증금(만원)</th>
              <th>임대료(만원)</th>
              <th>건축년도</th>
              <th>계약기간</th>
              <th>종전임대료</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.ACC_YEAR}</td>
                <td>{item.SGG_NM}</td>
                <td>{item.LAND_GBN_NM}</td>
                <td>{item.FLR_NO}</td>
                <td>{item.CNTRCT_DE}</td>
                <td>{item.RENT_GBN}</td>
                <td>{item.RENT_AREA}</td>
                <td>{item.RENT_GTN}</td>
                <td>{item.RENT_FEE}</td>
                <td>{item.BUILD_YEAR}</td>
                <td>{item.CNTRCT_PRD}</td>
                <td>{item.BEFORE_MT_RENT_CHRGE	}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </>
  );
}