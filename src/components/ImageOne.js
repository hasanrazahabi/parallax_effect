import React from "react";
import { Parallax } from "react-parallax";
import Nasa from "../assets/nasa1.jpg";
const ImageOne = () => (
  <Parallax className="image" bgImage={Nasa} strength={800}>
    <div className="content">
      <span className="image-txt">A trip to space</span>
    </div>
  </Parallax>
);
export default ImageOne;
