import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import PageNotFound from "./404/PageNotFound";
import Details from "./details/Details";
import SearchResult from "./searchResult/SearchResult";
import Explore from "./explore/Explore";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mediaType/:id" element={<Details />} />
      <Route path="/search/:query" element={<SearchResult />} />
      <Route path="/explore/:mediaType" element={<Explore />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
