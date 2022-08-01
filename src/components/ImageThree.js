import React from "react";
import { Parallax } from "react-parallax";
import sat from "../assets/sat.jpg";
const ImageThree = () => (
  <Parallax className="image" bgImage={sat} strength={800}>
    <div className="content">
      <span className="image-txt">A trip to space</span>
    </div>
  </Parallax>
);
export default ImageThree;
