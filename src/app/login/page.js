'use client';

import '@/app/login/login_remeber';
// import { useEffect } from 'react';


export default function LoginForm(){

  //login_remember 기능 연결
  // useEffect(()=>{
  //   Remember();
  // }, []);

  return(
    <div className='login_layout'>
      
      <form method='post'> 
        <fieldset>
        
          <div class="login_area">
           
            <div class="form_wrap">
                <div class="input_area">

                  <p class="text">
                    <span>로그인 쿠키 기억하기 기능 구현 테스트.</span>
                  </p>
                  
                  <div class="login_input_wrap">

                    <div class="login_input">
                      <label for="idTxt">아이디</label>
                      <input type="text"  id="user_id" name="user_id"  class="input100p" tabindex="1" placeholder="아이디를 입력하세요." onFocus="this.placeholder=''" onBlur="this.placeholder='아이디를 입력하세요.'" validation="true"  />
                    </div>

                    <div class="login_input">
                      <label for="pwTxt">비밀번호</label>
                      <input type="password" id="password" name="password"  class="input100p" tabindex="2" value="" min="1" max="12" placeholder="비밀번호를 입력하세요." onFocus="this.placeholder=''" onBlur="this.placeholder='비밀번호를 입력하세요.'" validation="true" />
                    </div> 

                  </div>

                  <div class="ckeck_box">
                    <input type="checkbox" id="checkId" name="checkId" />
                    <span>아이디 저장</span>
                  </div>
                  
                  <div class="btn_area">
                      <button class="btn" type="submit" tabindex="3">로그인</button> 
                  </div>

                  {/* <div class="login_etc">
                    <ul>
                      <li class="find_id">
                        <a href="/member/information/findid">아이디 찾기</a>
                      </li>
                      <li class="find_pw">
                        <a href="/member/information/findpw">비밀번호 찾기</a>
                      </li>
                    </ul>
                  </div> */}

                </div> 
            </div>
          </div>
      
        </fieldset>

      </form>
      
    </div>
  );
    

}