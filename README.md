## 작업 목적
 : Next.js 14 버전을 기반으로 Open API의 데이터를 호출 및 Vercel을 이용한 배포 과정까지 작업.

## 문제점
 1. fecthData.js 에 api 호출 코드를 작성 후 content.js에 import 하여 확인해보니 api 데이터가 화면에 나타나기까지 로딩 시간 존재 확인. -> 이유 와 해결 방법 찾는중
  -> api 호출은 성공했으나 시간이 걸림 ![image](https://github.com/ARISTAHS/side_project/assets/118969653/5dbfcf18-d8ca-4311-880b-98bca01be9c9)


  -> fecthData.js 의 URL에 포함된 필수 요청인자를 변수로 따로 담아서 보기 쉽게 시도 중. 


  -> 기존의 url 방식은 '경로 매개변수' 방식이며, 내가 구상했던 방식은 '쿼리 문자열'을 사용하여 매개변수를 전달하는 방식. 두 방식은 서로 다른 구조,,, 


  -> 열린공공데이터 사이트에서 권장하는 방식은 '경로 매개변수'방식 임을 확인. 



 2. 보안을 이유로 baseURL을 .env.local로 변경 할 계획.
 3. 현재 api 데이터를 바로 확인하고자 content.js에 바로 보여지게 했으나 api 종류에 맞게 바꿀 계획. -> 실거래 api : realCost.js  , 전월세가 api : rentCost.js
 4. 기본 공통 기능 js는 모두 components 파일로 정리
  

   



    


--------------------------------------------------------------------------------------------------------------------------------------


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


