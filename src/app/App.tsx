import { DidMountEvent } from './events/DidMountEvent';
import * as React from 'react';
import { TimeManager } from "./stateful/TimeManager";
import { InputDataManager } from './stateful/InputDataManager';

export class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>Main App</h1>
        <TimeManager />
        <DidMountEvent />
        <InputDataManager />
      </div>
    );
  }
}
