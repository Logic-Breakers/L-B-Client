import { useEffect } from "react";

export default function KakaoMap({ address, houseName }) {
  // useEffect 사용하는 이유 :
  // kakao.maps.LatLng is not a constructor 또는
  // Cannot read properties of undefined (reading 'Geocoder') 등
  // 에러가 발생하는 이유는
  // 아직 로딩이 끝나지 않아서 존재하지 않는데 사용하려고 하기 때문이다.

  // -> 해결방법 : 렌더링이 끝난 후 접근하면 된다.
  // 그러기 위해 정적 메서드인 load를 사용한다.
  // v3 스크립트를 동적으로 로드하기위해 사용한다.
  // 스크립트의 로딩이 끝나기 전에 v3의 객체에 접근하려고 하면 에러가 발생하기 때문에
  // 로딩이 끝나는 시점에 콜백을 통해 객체에 접근할 수 있도록 해 준다.
  // 비동기 통신으로 페이지에 v3를 동적으로 삽입할 경우에 주로 사용된다.
  // v3 로딩 스크립트 주소에 파라메터로 autoload=false 를 지정해 주어야 한다.

  useEffect(() => {
    kakao.maps.load(() => {
      // 지도를 표시할 div
      const mapContainer = document.getElementById("map");
      const mapOptions = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      // 지도를 생성합니다
      const map = new kakao.maps.Map(mapContainer, mapOptions);

      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${houseName}</div>`,
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });
    });
  }, [address]);

  return (
    <div>
      <div id="map" className="w-full h-[480px]" />
    </div>
  );
}
