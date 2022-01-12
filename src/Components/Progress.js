import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import "./progress.css";

function Progress(props) {
  const max = 6;
  const min = 1;
  const randomGrad = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        //This is where I want to replace the 100px width to props.percent in %

        <div>

          <div className="skills">
            <span className="Name">{props.skillname}</span>
            <div className="percent">
              <div
                className={
                  isVisible
                    ? `progress grad-${randomGrad}`
                    : "invisible-progress"
                }
                style={isVisible ? { width: props.percent} : { width: "0px" }}
              ></div>
            </div>
            <span className="Value">{props.percent}</span>
          </div>
        </div>
      )}
    </VisibilitySensor>
  );
}

export default Progress;
