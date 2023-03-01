import React, { useEffect, useState } from "react";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import LazyLoadImg from "../../../components/lazyLoadImage/LazyLoadImg";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";

const HeroBanner = () => {
  const [bgImage, setBgImage] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((store) => store.home);

  useEffect(() => {
    let newBg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBgImage(() => newBg);
  }, [data, url]);

  return (
    <div className="container">
      {!loading && (
        <div className="backdrop_img">
          <LazyLoadImg src={bgImage} />
        </div>
      )}
      <div className="gradient_layer"></div>
      <ContentWrapper>
        <div className="content">
          <span className="heading">Welcome</span>
          <span className="sub_heading">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
