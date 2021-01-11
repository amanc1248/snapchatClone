import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectcameraImage } from "./features/cameraSlice";
import { useHistory } from "react-router-dom";
import "./Preview.css";
function Preview() {
  const cameraImage = useSelector(selectcameraImage);
  const history = useHistory();
  useEffect(() => {
    if (!cameraImage) {
      history.replace("/");
    }
  }, [cameraImage, history]);
  return (
    <div className="preview">
      <h2>THIS IS YOUR PREVIEW</h2>
      <img src={cameraImage} alt="" />
    </div>
  );
}

export default Preview;
