import React from "react";

export default function VideoComponent({
  video: { title, thumbnail, channelName, downloads, desc }
}) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{channelName}</h4>
      <div className="frame">
        <img src={thumbnail} alt={desc} />
      </div>
      <p> * {downloads}</p>
    </div>
  );
}
