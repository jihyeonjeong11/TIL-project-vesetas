

React-Native 웹뷰 관련 확인 사항

기본 폼

```
<WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
```

주요 props:

1. onNavigationStateChange 웹뷰 URL이 변경될 때 실행되는 코드
2. onMessage 웹뷰에서 postMessage()가 발동될 때 리액트 네이티브 앱 내부에서 실행되는 코드
3. injectedJavaScript 웹뷰가 로딩 된 뒤 웹뷰 웹 상에서 실행되는 자바스크립트 코드


해당 정보로 적은 웹 사이트의 쿠키를 가져오는 예시 코드

```

export default class ProductDetails extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text>최근 본 상품</Text>
    ),
    headerTitleStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      goodData: {},
      isLoaded: false,
      cookies: {},
      webViewUrl: 'http://m.crunchprice.com/member/login.php',
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const goodData = navigation.getParam('item')
    await this.setState({
      goodData,
      isLoaded: true,
    });
  }

  // 바뀌는 URL을 스테이트로 탐지할 수 있게 해주는 코드

onNavigationStateChange = (webViewState: { url: string }) => {
  const { url } = webViewState;

  // when WebView.onMessage called, there is not-http(s) url
  if (url.includes('http')) {
    this.setState({ webViewUrl: url })
  }
}

// 만약 로그인이 성공되어 메인 페이지로 이동했다면, 저장된 쿠키 스테이트를 콘솔에 표시하도록 한다

_checkNeededCookies = () => {
  const { cookies, webViewUrl } = this.state;

  if (webViewUrl === 'http://m.crunchprice.com/') {
    console.log(cookies)
  }
}

// 아래 postMessage()로 받아 온 쿠키 정보를 오브젝트 형태로 단순화한다.

_onMessage = (event) => {
  const { data } = event.nativeEvent;
  const cookies = data.split(';'); // `csrftoken=...; rur=...; mid=...; somethingelse=...`

  cookies.forEach((cookie) => {
    const c = cookie.trim().split('=');

    const newCookies = this.state.cookies;
    newCookies[c[0]] = c[1];

    this.setState({ cookies: newCookies });
  });

  this._checkNeededCookies();
}

testCookieRequest = async () => {
  const banner = await Axios.get('http://m.crunchprice.com/mypage/index.php');
  console.log(JSON.stringify(banner))
} 

render() {
  const { goodData, isLoaded, webViewUrl } = this.state;
  console.log(webViewUrl);
  if (!isLoaded) {
    return (
      <Text>loading</Text>
    );
  }
  return (
    <View style={styles.primeContainer}>
      <TouchableOpacity onPress={this.testCookieRequest}>
        <Image source={{ uri: goodData.mainImageUrl, width: wp('40%'), height: hp('25%') }}/>
        <Text>{goodData.goodsNm}</Text>
      </TouchableOpacity>
      <WebView
      // url을 스테이트로 관리 하므로써 로그인 성공 시 스테이트가 변경되어 원하는 코드를 실행시킬 수 있음
        source={{ uri: webViewUrl }}
        onNavigationStateChange={this.onNavigationStateChange}
        onMessage={this._onMessage}
      // window.postMessage() 메소드로 RN 앱 내부에 document.cookie를 송신할 수 있다
        injectedJavaScript={'setTimeout(() => window.postMessage(document.cookie), 0)'}
        style={{ flex: 1 }}

      />

    </View>
  );
}
}

```