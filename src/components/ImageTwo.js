import React from "react";
import { Parallax } from "react-parallax";
import nasa from "../assets/nasa.jpg";
const ImageTwo = () => (
  <Parallax className="image" bgImage={nasa} strength={800}>
    <div className="content">
      <span className="image-txt">A trip to space</span>
    </div>
  </Parallax>
);
export default ImageTwo;
