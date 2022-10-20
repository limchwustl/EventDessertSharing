import Nav from "./components/Nav";
import About from "./routes/About";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import Info from "./components/Info";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db } from "./firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import "./app.css";

function App() {
  
  const [places, setPlaces] = useState();

  useEffect(() => {
    const placesCollectionsRef = collection(db, "places");
    const getPlaces = async () => {
      
      const data = await getDocs(placesCollectionsRef);
      const parsedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        key: doc.id,
    
      }));
      setPlaces((places) => parsedData);
    };

    getPlaces();
  }, []);

  return (
    <div className="container">
      <Router>
        <Nav />

        <Routes>
          <Route
            path="/place/:id"
            element={places && <Info places={places} />}
          />
          <Route
            path="/"
            element={
              places ? (
                <Home places={places} setPlaces={setPlaces} />
              ) : (
                <h1>loading ...</h1>
              )
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
