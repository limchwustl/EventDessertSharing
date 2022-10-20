/*global kakao */
import React, { useState } from "react";
import { useEffect } from "react";
import KakaoMap from "./KakaoMap";

import "./SearchMap.css";
const SearchMap = ({ address, name }) => {
  var [lat, setLat] = useState(37.365264512305174);
  var [lng, setLng] = useState(127.10676860117488);
  useEffect(() => {
    var geocoder = new kakao.maps.services.Geocoder();

    navigator.geolocation.getCurrentPosition(function (position) {});

    var callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setLng((lng) => parseFloat(result[0]["x"]));
        setLat((lat) => parseFloat(result[0]["y"]));
      }
    };

    geocoder.addressSearch(address, callback);
  }, [address]);

  return (
    <>
      <button className="kakaoDirectionButton">
        <a
          href={`https://map.kakao.com/link/to/${name},${lat},${lng}`}
          target="_blank"
          rel="noreferrer"
        >
          direction via kakao map
        </a>
      </button>
      <KakaoMap lng={lng} lat={lat} />
    </>
  );
};

export default SearchMap;
