import Home from "./pages/Home";
import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleMovie from "./pages/SingleMovie";

function App() {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  function addRecentlyViewed({ movie }) {
    //filmen läggs bara till i listan om den inte redan finns där
    let newMovie = recentlyViewed.find((newMovie) => movie.id === newMovie.id)
    if(!newMovie){
    let newList = [...recentlyViewed, movie];
    if (newList.length > 5) {
      newList.shift();
    }
    setRecentlyViewed(newList);
  }
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                addRecentlyViewed={addRecentlyViewed}
                recentlyViewed={recentlyViewed}
              />
            }
          />
          <Route path="/movie:id" element={<SingleMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
