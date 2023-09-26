// Image.jsx
import React from "react";

const Image = ({ webformatURL, tags }) => {
  return (
    <div>
      <img src={webformatURL} alt={tags} />
    </div>
  );
};

export default Image;
