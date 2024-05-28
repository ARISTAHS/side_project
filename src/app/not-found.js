// 사용자가 잘못 된 URL을 입력하여 접속 했을때 오류 표시 페이지 

export default function NotFound(){
  return(
    <main className="not-found">
      <h1>404 | NOT FOUND PAGE</h1>
      <p>URL 혹은 잘못된 주소를 입력하여 요청하신 페이지를 찾지 못 했습니다.</p>
    </main>
  );
}