import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <>
      <div className="app-download" id="app-download">
        <p>
          For better experience download <br /> HungryHub app
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="PlayStore" />
          <img src={assets.app_store} alt="AppleStore" />
        </div>
      </div>
    </>
  );
};

export default AppDownload;
