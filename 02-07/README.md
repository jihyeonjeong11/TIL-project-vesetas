


1. npm install express-generator
   express myapp
   와같은 방법으로 기본 익스프레스 서버 틀을 만들 수 있음.

2. ssh 서버 연결 과정(windows)
   
   a. ec2 인스턴스 생성

   b. 기본 ssh 22 포트 외 http 80, 서버로 활용할 포트 번호까지 인바운드 규칙을 열어줌

   c. putty 사용, ubuntu@ec2-54-180-147-212.ap-northeast-2.compute.amazonaws.com 주소, 키 설정해준 다음 ssh 터미널 오픈

   d. install npm, git clone 서버로 받아온 뒤 서버 실행으로 오픈

3. rds 데이터베이스와 서버 연결 과정, sequelize(windows)

   a. rds mySQL 데이터베이스 생성

   b. 데이터베이스 인바운드 규칙에서 ec2의 보안 그룹을 지정해서 연결할수 있게 해줌

   c. ssh에서 mysql 설치 후 mysql -h <DBhostname> -u <DBuser> -p로 접근함
   
   d. 서버 앱에서 구체화 해줌.