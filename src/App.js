import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Favourites from "./components/Favourites";
import Pagination from "./components/Pagination";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <Movies></Movies>
              </>
            }
          ></Route>
          <Route
            path="/favourites"
            exact
            element={<Favourites></Favourites>}
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
