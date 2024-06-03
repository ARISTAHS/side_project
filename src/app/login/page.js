'use client';

import { useEffect, useState } from 'react';
import LoginRemember from './login_remeber';

export default function LoginForm(){

  const [password, setPassword] = useState('');

  // useEffect(()=>{
  //   Cookie();
  // },[]);

  return(
    <div className='login_layout'>

      <LoginRemember></LoginRemember> 
      {/* 컴포넌트형식으로 작성하였기에 useEffect를 사용한 기능 불러오기가 에러를 일으킴. 
      컴포년트 형식으로 대입후 확인하니 기능 정상 작동. */}

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
                      <input type="text"  id="user_id" name="user_id" tabIndex="1" placeholder="아이디를 입력하세요." 
                      required
                      validation="true"  />
                    </div>

                    <div className="login_input">
                      <label for="pwTxt">비밀번호</label>
                      <input type="password" id="password" name="password" tabIndex="2" value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                      min="1" max="12" placeholder="비밀번호를 입력하세요." 
                      required
                      validation="true" />
                    </div> 

                  </div>

                  <div className="ckeck_box">
                    <input type="checkbox" id="checkId" name="checkId" />
                    <span>아이디 저장</span>
                  </div>
                  
                  <div className="btn_area">
                      <button className="btn" type="submit" tabIndex="3">로그인</button> 
                  </div>

                </div> 
            </div>
          </div>
      
        </fieldset>

      </form>
      
    </div>
  );
    

}