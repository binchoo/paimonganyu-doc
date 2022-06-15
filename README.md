# 여행 비서 페이몬 기능 안내

## 📚여행 비서 페이몬!

**여행 비서 페이몬**은 Hoyoverse 게임 [원신](https://genshin.hoyoverse.com/ko/)의 API를 래핑해

각종 게임 편의 기능을 제공하는 카카오 챗봇입니다.

원신 플레이어(이하 "여행자")들을 위해 페이몬이 대신 할 수 있는 일을 살펴볼까요??

![img](resources\channel_profile.png)

## 📗호요랩 일일 출석 관련 서비스

![호요랩의 일일출석](resources\hoyolab_dailycheckin.png)

여행자들은 호요버스 커뮤니티인 [HoYoLab에 출석](https://webstatic-sea.mihoyo.com/ys/event/signin-sea/index.html?act_id=e202102251931481)해서 소소한 보상을 받을 수 있습니다.

하지만 출석 체크 위해 커뮤니티에 매일 방문하는 건 귀찮아서... 많이 빼먹게 되죠?

> ![페이몬 이모지](resources\paimon_emoji.png) 그럼 **여행 비서 페이몬**에게 당신의 호요버스 통행증을 등록해 줘!
>
> 페이몬이 출석 체크를 매일 대신해서 해 줄게~

### 출석 체크

통행증을 등록한 여행자라면 페이몬에게 출석체크를 부탁할 수 있습니다.

[**통행증 조회> 출석 체크** 클릭!]![일일 출석 요청](resources\ui_dailycheck.png)

### 자동 출석 체크 서비스

**여행 비서 페이몬**은 여행자가 등록한 통행증을 사용하여 매일 매일 출석 체크를 넣어줍니다.

> ![페이몬 이모지](resources\paimon_emoji.png) 그거 알아? 페이몬은 하루에도 세 번, 여행자를 대신해서 출석 체크를 시도하고 있다구~
>

**Cron 기반의 출석체크 워크플로**![배치 일일 출석 워크플로](resources\batch_dailycheck_workflow.png)

> **출석 체크 시점 안내**
>
> 1. 챗봇 사용자가 출석 체크를 요청할 경우
> 2. 챗봇 사용자가 통행증을 페이몬에게 등록한 시점에 1회
> 3. 매일 3번의 정해진 시각에: GMT+9 (Seoul) 01, 09, 17시

### 출석 체크 이력

페이몬을 통해 호요랩 일일 출석을 시도한 이력을 확인해 볼 수 있습니다.

[**기능 모음> 페이몬의 출석 기록**]

![출석체크 이력](resources\ui_dailycheck_log.png)

## 📕여행자 실시간 조회 서비스

여행자들의 피로도 수치인 "레진", 지금 얼마나 쌓여 버렸는지 궁금하지 않으세요?

그럼 여행 비서인 페이몬에게서 확인을 부탁해 보세요.

![여행자 스테이터스](resources\ui_traveler_status.png)

> ![페이몬 이모지](resources\paimon_emoji.png) 레진/레진회복/선계보화/탐사파견수 값들을 알려줄게~ 이것들은 호요랩 API를 통해서 가져온 내용이야!
>

## 📘 통행증 관련 안내

> ![페이몬 이모지](resources\paimon_emoji.png) 페이몬에게 통행증을 알려주지 않으면, 귀찮은 일들을 대신해 줄 수 없어...
>

### 통행증은 왜 필요한가요?

통행증이란 여행자 여러분의 호요버스 계정 인증 정보입니다.  

호요랩 API를 호출할 때 필요하므로 **여행 비서 페이몬에게 꼭 하나 이상의 통행증을 등록**해주세요. 

![호요랩 통행증](resources\hoyolab_hoyopass.png)

호요랩에 가면 자신의 통행증 아이디가 있다는 걸 확인해 볼 수 있어요~



###  통행증 등록하기

통행증은 3가지 유저 인증 정보로 구성되며, 이 값들을 챗봇에 일일히 입력하는 것은 버겁습니다.

- `ltuid`과 `ltoken`: 호요버스 계정의 인증 정보입니다.

- `cookietoken`: 호요버스 계정의 코드 리딤용 인증 정보입니다.

  

따라서 **보안 통행증 QR 만들기** 절차에 따라 **QR 코드를 스캔하여** 업로드해 주세요!!

## 📘 통행증 QR 만들기

###  1단계. 호요버스 계정의 인증 정보를 찾자

#### ltuid, ltoken 찾는 방법

[HoYoLab](https://www.hoyolab.com/home) 로그인 후 브라우저 쿠키에서 획득

![image-20220615135949028](resources\ltuid_ltoken.png)

#### cookietoken 찾는 방법

 **[원신 리딤 페이지](https://genshin.hoyoverse.com/ko/gift)**에서 로그인 후 브라우저 쿠키에서 획득

![image-20220615140445067](C:\Users\wnwoq\AppData\Roaming\Typora\typora-user-images\image-20220615140445067.png)

### 2단계. QR 코드를 만들자

1. [링크: 현재 깃허브 페이지 QR 생성하는 부분]에서 획득한`ltuid, ltoken, cookietoken`를 모두 입력하여 주세요.
2. QR 생성을 요청해서 QR 코드를 획득합니다.

> ![페이몬 이모지](resources\paimon_emoji.png) QR 코드에 담은 여행자의 인증 정보는 암호화가 되어있어서 **보안 통행증**이라고 부르고 있지~
>
> 그래도 이걸 다른 사람에게 공유해서는 안 돼! 멋대로 스캔해 가 버리면 곤란하잖아?

## 📘 통행증 등록하기 (QR 스캔)

![QR 생성된 모습](resources\ui_qrscan.png)

1. **여행 비서 페이몬**에서 QR 스캔 기능을 호출합니다. **(QR 등록 안내> 스캔 진행> 스캐너 열기)**
2. 웹 사이트에서 제작한 QR 코드를 스캔해 주세요.
3. 페이몬이 통행증 정보를 등록 완료하면, 해당 계정의 모든 여행자 캐릭터가 표시됩니다. (주의. 10초 이상 응답이 지연될 경우 스캔을 재시도 해보세요)



## 📘 통행증 조회

통행증 등록을 마쳤다면 아래와 등록된 통행증을 조회할 수 있어야 합니다. 

꼭 `통행증 조회` 기능을 호출해 보세요. 해당 계정에 대해 출석 체크를 요청하거나, 정보 삭제를 요청할 수도 있습니다~

![통행증 조회](resources\ui_hoyopasses.png)

## :orange_book: 코드 리딤 서비스

### 페이몬의 코드 리딤

![image](F:\repositories\paimonganyu-doc\resources\new_redeem_workflow)

> ![페이몬 이모지](resources\paimon_emoji.png) 그거 알아? 페이몬은 (관리자에 의해) 새로운 리딤 코드를 알게 될 때마다 
>
> 등록된 모든 여행자의 계정으로 코드 리딤을 넣어주고 있다구~



### (개발중) 리딤 코드 배포 기능

![image](F:\repositories\paimonganyu-doc\resources\new_user_redeem_workflow)

> ![페이몬 이모지](resources\paimon_emoji.png) 새로 알게 된 리딤 코드가 있다구? 그럼 페이몬에게도 알려주지 않을래?
>
> 페이몬이 다른 모든 여행자들에게도 리딤 코드를 넣어 주겠어~