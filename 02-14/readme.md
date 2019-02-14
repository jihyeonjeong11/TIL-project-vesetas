02 14 TIL

- MapView에 기능을 추가 시작함

1. 현재 위치 표시

```
provider={MapView.PROVIDER_GOOGLE}
showsUserLocation={true} 
showsMyLocationButton={true}
```

2. 맵뷰 동적 마커 구현.

```

<MapView 
  ....
>
  {this.state.markers.map(marker => (
    <MapView.Marker 
      coordinate={marker.coordinates}
      title={marker.title}
    />
  ))}
</MapView>

```