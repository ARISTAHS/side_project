export async function fetchData(){
  
  try{
    
    const baseUrl = "http://openapi.seoul.go.kr:8088/";
    const key = "4c75694e4a70617235386d48717549/";
    const type = 'json/';
    const service = "tbLnOpendataRtmsV/";
    const startIndex = "1/";
    const endIndex = 500;
   
    const url = baseUrl+key+type+service+startIndex+endIndex;
 
        
    const response = await fetch(url);
    console.log(response); //콘솔 확인

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json(); // Json 데이터변환 
    // console.log(jsonData); //콘솔 확인
    return jsonData; // 데이터 반환
    
  } catch(error){
    console.error('API 데이터 호출 중 오류 발생.', error) //오류 처리 
    alert('API 데이터 호출 중 오류 발생.')
    throw error;
  }
  
}

