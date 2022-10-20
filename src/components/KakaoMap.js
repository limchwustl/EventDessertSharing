/*global kakao */
import React, { useEffect} from "react";

const KakaoMap = ({ lng, lat }) => {
  useEffect(() => {
    //node; html element that contains map
    let container = document.getElementById("map");
    let options = {
      //axis
      center: new kakao.maps.LatLng(lat, lng),
      //magnifier
      level: 3,
      //mouse drag, wheel enabler
    };
    //initialize map
    let map = new kakao.maps.Map(container, options);
    // eslint-disable-next-line
    let marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(lat, lng),
    });
  }, [lat, lng]);

  return (
    <div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
};

export default KakaoMap;
