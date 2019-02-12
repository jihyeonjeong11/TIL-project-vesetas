CodeStates 2주 프로젝트: Octoparse -1

2주간 웹 개발 팀프로젝트를 진행 중이다.

채식주의자를 위한 식당 소개 앱을 만들기 위해서 리액트 네이티브를 활용한 모바일 앱을 만들기로 계획했고 이를 위해서 서울/경기권 채식 식당 데이터를 긁어오는 작업을 진행 중이다.

Octoparse는 웹 스크래이핑 과정을 쉽게 만들어 주는 툴로 윈도우 운영체제라 구글에서 제공하는 puppeteer 모듈을 사용하기 힘들었기 때문에 사용하게 되었다. 이번에는 간단하게 내가 사용한 방법에 대해서만 정리하고 시간이 되면 해당 툴의 tutorial을 번역해 보려 한다.

Web Scraping Tool & Free Web Crawlers for Data Extraction | Octoparse

https://www.octoparse.com/

해당 프로그램은 위 URL에서 다운받을 수 있으며 무료로 사용할 수도, 월 특정 금액을 내고 사용할 수도 있다. 내가 사용한 무료 버전의 경우 크롤링한 데이터를 

저장하는데 최대 저장 용량이 10000건이다. 물론 채식주의자 식당이라 그렇게 많은 데이터가 필요하지는 않았다.

처음 프로그램을 실행하면 이런 모습이 나타난다. 템플릿 기능은 사용해보지 않았기 때문에 곧바로 Advanced Mode에서 태스크를 할당하면

긁어올 페이지의 URL을 명시하는 칸이 나타난다.

Google Map을 활용할 것이므로

https://www.google.com/maps/d/viewer?ie=UTF8&hl=en&msa=0&ll=37.533905%2C126.99553700000001&spn=0.002472%2C0.004608&z=18&iwloc=0004853210b24db86d2dd&mid=11rmzgn_-gXKrRKPPVEhJfScfqJ8

서울의 채식 식당이라는 URL을 입력하도록 한다.

아래에 로딩된 페이지를 활용해 구체적인 액션을 지정해 줄 수 있다.

왼쪽의 식당 이름을 하나 클릭하면 오른쪽 노란 창에서 91개의 유사한 엘리먼트를 찾았다고 나오는데, 이를 모두 지정하고

Loop click each element 명령으로 내가 할 행동을 이 페이지의 모든 링크에 동일하게 수행할 수 있다.

루프를 적용하고, 다시 엘리먼트를 클릭해 click element를 선택하면 페이지가 이동하며 실제 긁어올 데이터를 지정해줄 수 있다.

예제로 식당의 이름, 주소, 전화번호, 식당의 설명을 저장해 보았다.

이후 start extraction 버튼을 통해 곧바로 크롤링을 시작할 수 있다.

스크린샷이 있는 설명은 

https://medium.com/@wjdwlgus11/codestates-2%EC%A3%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-octoparse-1-e78bf723526b

URL에서 볼 수 있다.