<h1> TIL 02-02 </h1>

<p>
1. 리액트 네이티브, expo의 사용법

a. 터미널에서 npm install --g react-native-cli
   npm install --g expo-cli로 필요한 모듈을 글로벌로 설치한다.

b. expo init 'project name' 으로 expo를 사용할 수 있는 react native 프로젝트 이름을 설정해 준다.

2. expo에서 google map api 활용하는 법.

```
// expo 공식문건 mapview에서 발췌
import React from 'react';
import { MapView } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}
```
해당 방식으로 public api key를 사용해 api key를 입력하지 않고 구글 mapview를 렌더할 수 있다.
차후 standalone으로 빌드해여 진행할 때 api key를 입력해야 함.


</p>