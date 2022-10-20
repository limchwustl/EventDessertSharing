import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SearchMap from "./SearchMap";

const Info = ({ places }) => {
  const { id } = useParams();
 
  // eslint-disable-next-line no-unused-vars
  const [place, setPlace] = useState(

    places.find((place) => place.id.toString() === id)
  );
 

  return (
    <div>
      {place.name ? <h1>{place.name}</h1> : <h3> loading</h3>}

      {place.inst_url ? <iframe
        src={`${place.inst_url}embed`}
        title = {`${place.id}`}
        width="400"
        height="480"
        frameBorder="0"
        scrolling="no"
        allowtransparency="true"
      ></iframe> : <h3> loading</h3>}

      {place.location ? <SearchMap address={place.location.toString()} name={place.name} /> : <h3>loading map</h3>}
    </div>
  );
};

export default Info;
