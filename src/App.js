import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./redux/homeSlice";
import { fetchDataFromApi } from "./utils/api";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AllRoutes from "./pages/AllRoutes";

function App() {
  const { url } = useSelector((store) => store.home);
  console.log("url:", url);
  const dispatch = useDispatch();

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log("res:", res);

      const url = {
        backdrop: res?.images?.secure_base_url + "original",
        poster: res?.images?.secure_base_url + "original",
        profile: res?.images?.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  useEffect(() => {
    fetchApiConfig();
  }, []);

  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
