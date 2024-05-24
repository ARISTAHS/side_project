import '@/app/login/login_remeber';
// import { useEffect } from 'react';


export default function LoginForm(){

  return(
    <div className='login_layout'>
      
      <form method='post'> 
        <fieldset>
        
          <div className="login_area">
           
            <div className="form_wrap">
                <div className="input_area">

                  <p className="text">
                    <span>로그인 쿠키 기억하기 기능 구현 테스트.</span>
                  </p>
                  
                  <div className="login_input_wrap">

                    <div className="login_input">
                      <label for="idTxt">아이디</label>
                      <input type="text"  id="user_id" name="user_id" tabindex="1" placeholder="아이디를 입력하세요."  validation="true"  />
                    </div>

                    <div className="login_input">
                      <label for="pwTxt">비밀번호</label>
                      <input type="password" id="password" name="password" tabindex="2" value="" min="1" max="12" placeholder="비밀번호를 입력하세요." validation="true" />
                    </div> 

                  </div>

                  <div className="ckeck_box">
                    <input type="checkbox" id="checkId" name="checkId" />
                    <span>아이디 저장</span>
                  </div>
                  
                  <div className="btn_area">
                      <button className="btn" type="submit" tabindex="3">로그인</button> 
                  </div>

                </div> 
            </div>
          </div>
      
        </fieldset>

      </form>
      
    </div>
  );
    

}