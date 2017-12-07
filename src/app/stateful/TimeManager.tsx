import * as React from "react";
import { Time } from "../stateless/Time";

interface TimeManagerProperties {
  currentTime: string;
}

export class TimeManager extends React.Component<any, TimeManagerProperties> {
  constructor(properties: any) {
    super(properties);
    this.state = { currentTime: new Date().toLocaleTimeString() };
    this.loopTimeUpdate();
  }

  loopTimeUpdate() {
    setInterval(() => {
      const currentDate = new Date();
      this.setState({ currentTime: currentDate.toLocaleTimeString() });
    });
  }

  render() {
    return <Time currentTime={this.state.currentTime} />;
  }
}
