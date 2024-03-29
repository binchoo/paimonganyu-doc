# PaimonGanyu Doc: 여행 비서 페이몬! 설명 문서
![](https://user-images.githubusercontent.com/15683098/174451092-752c670f-6450-4883-9c77-2b9629549e52.png)
![](https://user-images.githubusercontent.com/15683098/174451095-783adfbc-e1d1-4480-a955-10d7ba954647.png)

## 「여행 비서 페이몬!」이란

- 오픈 월드 RPG 게임 [**원신**](https://genshin.hoyoverse.com/ko/)을 대상으로 한 게임 편의성 챗봇입니다.

- 호요랩 API를 래핑하여, 원신 유저에게 다양한 편의 기능을 제공하는 것을 목표로 합니다.

현 시점에 `호요랩 일일 출석`,  `여행자 상태 조회`, `코드 리딤 배포`를 중심으로 기능을 구성하고 있습니다.

## 카카오 채널 & 챗봇

**「여행 비서 페이몬!」 카카오 채널** :point_right: http://pf.kakao.com/_mtPFb

카카오 채널과 친구를 맺고 챗봇 서비스 이용을 시작할 수 있어요!

![](https://user-images.githubusercontent.com/15683098/174451071-6cc9ad30-2854-4548-a456-89740320dd47.png)

## 주요 기능

### 자동 일일 출석 서비스

매일 매일 특정 시각에 :heavy_check_mark:호요랩 일일 출석을 수행해 줍니다.

### 직접 일일 출석

통행증을 등록한 유저라면 임의로 출석 체크를 부탁할 수도 있습니다.

### 일일 출석 이력 조회

페이몬이 여행자를 대신해 일일 출석을 시도한 이력을 모든 통행증에 대해서 확인해 볼 수 있습니다.

### 실시간 스테이터스 조회

등록된 모든 여행자 캐릭터들의 스테이터스를 조회하여 줍니다.

### :calendar: 게임 전적 조회

(개발 예정:calendar: 기능입니다.)

「여행 비서 페이몬!」은 호요랩 API 이용 기반이 마련되어 있어서 추후, 게임 전적 데이터를 활용한 기능이 업데이트 될 가능성이 있습니다.

### QR 코드(보안 통행증) 만들기

[통행증 QR 만들기 페이지](https://binchoo.github.io/paimonganyu-doc/docs/tutorial/create-qr-code)

![](https://user-images.githubusercontent.com/15683098/174451179-bf4a4f2e-e2c3-496e-b364-e5e030713bbb.png)

> **QR 코드를 쓰는 이유**
>
> 통행증을 구성하는 값들은 복잡하여 채팅에다 입력하기 버거울 뿐더러, 
>
> 개인 정보를 텍스트로 전송하는 건 안전하지 않습니다.
>
> 따라서 인증 정보를 암호화환 QR 코드를 만들어 시스템에 스캔 전송하게 됩니다.

### 통행증 등록 (QR 스캔)

**통행증 등록**은 여행 비서 페이몬과 <u>처음으로 해야 할 일</u>입니다.

[통행증 QR 만들기 페이지](https://binchoo.github.io/paimonganyu-doc/docs/tutorial/create-qr-code)에서 QR 코드를 완성하고 챗봇에서 스캔합니다. 

![image](https://user-images.githubusercontent.com/15683098/174451216-7413aeff-4fa5-49f1-a53d-d009ce91e96d.png)

통행증 등록이 완료되면 페이몬이 해당 계정 속의 여행자들을 파악합니다.

> **지연 응답 대처**
>
> AWS Labmda의 콜드 스타트와 Springboot의 부트스트랩이 지연을 야기할 수 있습니다. (프로젝트 목적상 기술 스택을 타협할 수 없었습니다.)
>
> 응답 지연 발생시 약 10초의 텀을 가지고 수차례 재시도 해주세요.

### 통행증 조회

페이몬 비서가 관리하는 통행증 정보를 조회합니다.

조회한 통행증으로 출석 체크를 요청하거나, 정보 삭제를 요청할 수도 있습니다.

### 페이몬의 코드 리딤
관리자에 의해 새로운 리딤 코드를 알게 될 때마다, 페이몬은 등록되어 있는 모든 통행증으로 코드 리딤을 넣어줍니다.

### :wrench: 유저의 코드 리딤

(개발중:wrench: 기능입니다.)

유저에 의해 새로운 리딤 코드를 알게 될 때마다 , 페이몬은 등록되어 있는 모든 통행증으로 코드 리딤을 넣어줍니다.

### :wrench: 통행증 등록시 코드 리딤

(개발중:wrench: 기능입니다.)

시스템에 통행증을 등록할 경우, 해당 통행증을 대상으로 <u>알려진 모든 리딤 코드</u>가 리딤 시도됩니다. 

## 통행증 특강

> **통행증의 중요성에 대해⋯**
> 
>통행증이 없다면 페이몬 비서는 아무 일도 할 수 없습니다. 페이몬 비서와의 "첫 단추"는 통행증 QR을 만들어서 스캔 전송하는 것임을 기억하세요.

### 통행증이란?

![image](https://user-images.githubusercontent.com/15683098/174451232-a73a04cb-605b-43e7-aaba-59a8221eaed3.png)

통행증이란, 호요버스에서 유저 계정에 부여하는 고유한 인증 정보를 말합니다.

페이몬 비서가 여러분을 대신해 어떻게 호요버스 API를 호출할 수 있는 이유가 바로, 유저가 등록한 통행증 덕분입니다.

꼭 하나 이상의 통행증을 등록해 주세요.

### 본인의 통행증 값 알아내기

본인의 통행증 정보는 <u>호요랩 로그인 후 브라우저의 쿠키에 세팅</u>되며, 3가지 값으로 구성됩니다.

1. `ltuid`: 호요버스 계정의 통행증 아이디입니다.
2. `ltoken`: 통행증 아이디에 대응되는 개인 토큰입니다.
3. `cookie_token`: 코드 리딤 서비스에서 이용되는 개인 토큰입니다. 


이 세 가지 값을 찾는 방법 

![image](https://user-images.githubusercontent.com/15683098/174451238-f18f1ceb-bcd9-44bf-aaa9-75c09bec5de9.png)

#### **1단계. HoYoLab에서 로그인**

**PC 브라우저**로 [호요랩](https://www.hoyolab.com/home)에 방문해서 본인의 호요버스 계정으로 로그인 해 주세요.

#### **2단계. 개발자 도구로 쿠키 값 들여다 보기**


<details>
  <summary>한국어 단계</summary>
   `개발자도구(F12)` > `응용 프로그램` 탭> `저장소` 섹션> `쿠키` 항목> 호요랩 URL 주소 클릭!
</details>

<details>
  <summary>영어 단계</summary>
   `DevTools(F12)`> `Application` 탭> `Storage` 섹션> `Cookies` 항목> 호요랩 URL 주소 클릭!
</details>

`ltoken`, `ltuid`, `cookie_token` 값을 발견하면 메모장 같은 데에 잘 복사해 두세요~.

## PaimonGanyu Doc LICENSE

[CC0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed.ko)

**의존성 라이센스**
- docusarus [MIT LICENSE](https://github.com/facebook/docusaurus/blob/main/LICENSE)

