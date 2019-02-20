

1. 익스프레스의 @awaitjs/express 미들웨어를 활용해 기존 try/catch 블록 에러 핸들링의 구문을 간략화할수있다.


```
const express = require('express');
const { decorateApp } = require('@awaitjs/express');

const app = decorateApp(express());

// Important to use `getAsync()` here, otherwise this middleware will hang
// forever with Express 4.x.
app.getAsync('*', async function(req, res, next) {
  throw new Error('Oops!');
});

app.use(function(error, req, res, next) {
  res.send(error.message);
});

```

현 예시는 기존 try/catch를 async 미들웨어로 변경한 것으로, 
에러가 발생할 경우 기존 코드에서는 error를 catch 블록에서 확인하여 리턴하지만 이 경우
프로미스가 async에 곧바로 완료되기 때문에, 아래의 단에서 곧바로 에러 결과를 리턴해줄 수 있다.
하지만 에러 종류에 따라 스테이터스 코드가 달라져야 하는 경우 조금 더 알아보아야겟다.