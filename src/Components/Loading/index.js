import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "../../styles/loading.scss";

const Loading = () => {
  return (
    <div className="loading-page">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#00c7fb"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
