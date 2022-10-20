import React, { useState, useEffect, useRef } from "react";
import ".././routes/Home.css";

const Filter = ({ setFilter, setCurPlaces, places }) => {
  const [curType, setCurType] = useState(-1);
  const [curLoc, setCurLoc] = useState(-1);

  const onTypeClick = (type) => {
    setCurType((curType) => type);
    const tempArr = [curType, curLoc];
    setFilter((filter) => tempArr);
  };

  const onLocClick = (loc) => {
    setCurLoc((curLoc) => loc);
    const tempArr = [curType, curLoc];
    setFilter((filter) => tempArr);
  };
  return (
    <>
      <li className="type-container">
        <button
          id="cafe"
          onClick={() => (curType === 0 ? onTypeClick(-1) : onTypeClick(0))}
        >
          Cafe
        </button>
        <button
          id="bakery"
          onClick={() => (curType === 1 ? onTypeClick(-1) : onTypeClick(1))}
        >
          Bakery
        </button>
        <button id="party balloons" onClick={() => onTypeClick(2)}>
          party balloons
        </button>
        <button id="date night ideas" onClick={() => onTypeClick(3)}>
          date night ideas
        </button>
        <button id="nightlife" onClick={() => onTypeClick(4)}>
          nightlife
        </button>
      </li>
      <li className="loc-container">
        <button
          id="강남"
          onClick={() => (curLoc === 0 ? onLocClick(-1) : onLocClick(0))}
        >
          강남
        </button>
      </li>
    </>
  );
};

export default Filter;
