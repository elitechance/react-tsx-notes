import * as React from "react";

export interface TimeProperties {
  currentTime: string;
}

export const Time = (properties: TimeProperties) => {
  return (
    <div>
      <h4>Time is: {properties.currentTime}</h4>
    </div>
  );
};
