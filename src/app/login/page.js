'use client';

import {Remember} from '@/app/login/login_remeber';
import { useEffect } from 'react';


export default function LoginLayout(){

  //login_remember 기능 연결
  useEffect(()=>{
    Remember();
  }, []);

  return(
    <div className='login_layout'>
      
      <form method='post' > 
        <fieldset>
        
          <div class="login_area">
            <div class="top">
              {/* <img src="/images/user/logo_3_footer.png" alt="기술가치평가협회"> */}
            </div>
            <div class="bottom">
                <div class="input_area clearfix">
                  <p class="text">
                    <span>AI바우처에 오신 것을 환영합니다.</span>
                    로그인하여 서비스를 이용해보세요
                  </p>
                  {/* <p class="text">${loginErrorMsg}</p> */}
                  <div class="login_left">
                    <div class="login_input">
                      <label for="idTxt">아이디</label>
                      <input type="text"  id="user_id" name="user_id"  class="input100p" tabindex="1" placeholder="아이디" validation="true"  />
                    </div>
                    <div class="login_input">
                      <label for="pwTxt">비밀번호</label>
                      <input type="password" id="password" name="password"  class="input100p" tabindex="2" value="" placeholder="비밀번호" validation="true" />
                    </div> 
                  </div>

                  <div class="ckeck_box">
                    <input type="checkbox" id="checkId" name="checkId" />
                    <span>아이디 저장</span>
                  </div>
                  
                  <div class="btn_area">
                      <button class="btn btn-primary" type="submit" tabindex="3">로그인</button> 
                  </div>

                  <div class="login_etc">
                    <ul>
                      <li class="find_id">
                        <a href="/member/information/findid">아이디 찾기</a>
                      </li>
                      <li class="find_pw">
                        <a href="/member/information/findpw">비밀번호 찾기</a>
                      </li>
                    </ul>
                  </div>

                </div> 
            </div>
          </div>
      
        </fieldset>

      </form>
      
    </div>
  );
    

}