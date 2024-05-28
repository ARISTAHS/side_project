'use client'; 
// error component는 무조건 클라이언트 component 여야 한다.

export default function Error(){
  return(
    <main className="error">
      <p>404 에러 입니다. 나중에 다시 시도하여 주십시오.</p>
    </main>
  );
}
