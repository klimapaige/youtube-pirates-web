import React from "react";

export default ({ title, thumbnail, channelName, downloads, desc, date }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{channelName}</h4>
      <h4>{date}</h4>
      <div className="frame">
        <img src={thumbnail} alt={desc} />
      </div>
      <p> * {downloads}</p>
    </div>
  );
};
