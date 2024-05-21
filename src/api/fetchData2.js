export async function fetchData2(){
  try{

    const baseUrl = "http://openapi.seoul.go.kr:8088/";
    const key = "4c75694e4a70617235386d48717549/";
    const type = "json/";
    const service = "tbLnOpendataRentV/";
    const startIndex = "1/";
    const endIndex = 400;

    const url = baseUrl+key+type+service+startIndex+endIndex;
    // const url = `${baseUrl}?${key}&${type}&${service}&${startIndex}&${endIndex}`;

    const response = await fetch(url);
    console.log(response); // url 응답 확인
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }  

    const jsonData2 = await response.json(); // json 데이터로 변환 처리
    return jsonData2; // 데이터 반환

  }catch(error){
    console.log('API 데이터 호출 중 문제 발생.', error) //오류 콘솔 표시
    alert('API 데이터 호출 중 문제 발생.') // 이용자가 볼 수 있게 메시지 표시
    throw error; // 에러 밖으로 전달.
  }

}