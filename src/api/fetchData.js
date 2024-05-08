export async function fetchData(){
  
  try{

    const baseURL = "http://openapi.seoul.go.kr:8088/574462627370617239374b59626f6b/json/tbLnOpendataRtmsV";
    const key = "인증키";
    const service = "tbLnOpendataRtmsV";
    const startIndex = 1;
    const endIndex = 5;
    const accYear = 2024;
    const sggNm = "강남구";
    const bjdongCd = "법정동코드";
    const houseType = "건물용도";
    const url = `${baseURL}/1/5?key=${key}&service=${service}&start_index=${startIndex}&end_index=${endIndex}&acc_year=${accYear}&sgg_nm=${sggNm}&bjdong_cd=${bjdongCd}&house_type=${houseType}`;
    

    const response = await fetch(url);
    console.log(response); //콘솔 확인

    // const response = await fetch("http://openapi.seoul.go.kr:8088/574462627370617239374b59626f6b/json/tbLnOpendataRtmsV/1/5?key=인증키&service=tbLnOpendataRtmsV&start_index=1&end_index=5&acc_year=2024&sgg_nm=강남구&bjdong_cd=법정동코드&house_type=건물용도");


    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json(); // Json 데이터변환 
    console.log(jsonData); //콘솔 확인
    return jsonData; // 데이터 반환
    
  } catch(error){
    console.error('API 데이터 호출 중 오류 발생.', error) //오류 처리 
    alert('API 데이터 호출 중 오류 발생.')
    throw error;
  }
  

}

