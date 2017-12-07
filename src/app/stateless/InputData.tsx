import * as React from "react";

interface InputDateProperties {
  dataHandler?: Function;
}

export const InputData = (properties: InputDateProperties) => {
  let data: string;
  return (
    <span>
      <input onChange={(event)=>{data = event.target.value}} />
      <button onClick={() => {properties.dataHandler(data)}}>submit</button>
    </span>
  );
};
