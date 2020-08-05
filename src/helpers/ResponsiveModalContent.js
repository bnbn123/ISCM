/* A simple iframe wrapper that makes 16:9 responsive embed */
import React from "react";

export default ({ url, background = "black", classname }) => {
  return (
    <div
      className={classname}
      style={{
        position: "relative",
        background: background,
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 0,
        height: 0,
      }}
    >
      {classname === "modal" ? (
        <img
          alt="ModalImage"
          title="Image-modal"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={url}
          frameBorder="0"
        />
      ) : (
        <iframe
          title="video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={url}
          frameBorder="0"
        />
      )}
    </div>
  );
};
