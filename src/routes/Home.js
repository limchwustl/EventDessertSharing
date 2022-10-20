import React, { useState, useEffect, useRef } from "react";
import Place from "../components/Place";
import "./Home.css";
import Filter from "../components/Filter";
import { db } from "../firebase/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

const Home = ({ places, setPlaces }) => {
  const [curPlaces, setCurPlaces] = useState(places);
  const [filter, setFilter] = useState([-1, -1]);

  const isMounted = useRef(false);
  const [switchBetweenListAndTableView, setSwitchBetweenListAndTableView] =
    useState(false);

  const switchViewOfResults = () => {
    setSwitchBetweenListAndTableView(
      (switchBetweenListAndTableView) => !switchBetweenListAndTableView
    );
  };

  useEffect(() => {
    const filterEnum = {
      0: "type",
      1: "region",
    };
    if (isMounted.current) {
      const queryDataWithFilter = (filter) => {
        const getPlaces = async () => {
          const placesCollectionsRef = collection(db, "places");
          if (placesCollectionsRef) {
            let q = query(placesCollectionsRef);
            for (let i in filter) {
              if (filter[i] !== -1) {
                q = query(
                  placesCollectionsRef,
                  where(filterEnum[i], "==", filter[i])
                );
              }
            }

            const querySnapshot = await getDocs(q);

            const parsedData = querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
              key: doc.id,
            }));
            setCurPlaces((places) => parsedData);
          }
        };
        getPlaces();
      };

      queryDataWithFilter(filter);

      return;
    }
    isMounted.current = true;
  }, [filter]);

  useEffect(() => {
    localStorage.setItem("isTableView", !localStorage.getItem("isTableView"));
  }, [switchBetweenListAndTableView]);

  return (
    <div className="home-container">
      <div className="filter-container">
        <Filter
          setFilter={setFilter}
          setCurPlaces={setCurPlaces}
          places={places}
        >
          filter
        </Filter>
      </div>
      <button onClick={switchViewOfResults}>
        {" "}
        click here to switch to list view
      </button>
      <div>
        {switchBetweenListAndTableView ? (
          <div className="result-container-table">
            <ul className="table-ul">
              {curPlaces.map((place) => (
                <li key={place.key}>
                 
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="result-container-list">
            <ul>
              {curPlaces.map((place) => (
                <li key={place.key}>
                  <Place
                    key={place.key}
                    id={place.id}
                    name={place.name}
                    image={place.image}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ul></ul>
    </div>
  );
};

export default Home;
