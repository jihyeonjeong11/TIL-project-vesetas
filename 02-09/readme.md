

<h1>jsonwebtoken 기본 사용법</h1>


<p>
1. npm 인스톨

터미널에서 npm install -save jsonwebtoken 으로 설치


2. 토큰 생성

client-side

```
const token; // 차후 토큰이 저장될 곳(편의상 글로벌 스코프에 수용)

function tokenHandler() {
  var signInData={name: 'something', password: 'password'};
  window.fetch('http://serverURL:portNumber/token',{
  method: 'POST', 
  body: JSON.stringify(signInData),
  headers:{
    'Content-Type': 'application/json'
    }
  }).then(res =>{
    console.log(res)
    return res.json() // 토큰을 서버로부터 전송받아 읽을 수 있는 json 형태로 바꾼다.
      }).then(json => {
        token = json; // global 변수 token에 저장함
        console.log(json)
      })

      
}
```

server-side

```
var jwt = require('jsonwebtoken'); // npm install한 jwt 모듈 사용
const secret = 'moo'; // 해싱할 문자열의 key

router.post('/', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  var token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + 30, // 현재 시각 + 토큰 유효 시간 설정
    data: req.body // 로그인 정보 수용
  }, secret);
  console.log(token);

  res.json(token); // 클라이언트로 전송
});

```

3. 토큰 확인


client-side

```
function verifyHandler() {
  window.fetch('http://serverURL:portNumber/verify',{
  method: 'POST',
  body: JSON.stringify({token: token}), // 토큰의 형태를 오브젝트 json 형태로 서버에 전송
  headers:{
    'Content-Type': 'application/json'
    }
  }).then(result => {
    if(result.status === 201) {
      alert('token is valid'); // 토큰이 유효하다면 유효 알림
    } else {
      alert('token expired'); // 만료되었다면 에러 메시지
    }
  }).catch(err => alert(err));
}
```

server-side

```

var jwt = require('jsonwebtoken');
const secret = 'moo'
router.post('/', function(req, res, next) {
    console.log(req.body)
    var decoded = jwt.verify(req.body.token, secret); // 다시 전송받은 token과 secret값으로 복호화함
    console.log(decoded)
    if(decoded){ // 복호화 성공했을 경우 성공 코드(201 전송)
     res.status(201).send('token exists')
    }
    else{ res.status(501).send('token expired')} // 실패할 경우 에러 전송
});


```

</p>