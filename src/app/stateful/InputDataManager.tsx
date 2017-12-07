import * as React from 'react';

import { InputData } from '../stateless/InputData';

export class InputDataManager extends React.Component<any, any> {
  constructor(properties: any) {
    super(properties);
    this.state = {aData: '', bData: ''}
  }

  render() {
    return <div>
        <div> Data From A: <label>{this.state.aData}</label></div>
        <div> Data From B: <label>{this.state.bData}</label></div><br/>
        <div> Data A <InputData dataHandler={(data: string) => {this.setState({aData: data})}} /></div><br />
        <div> Data B <InputData dataHandler={(data: string) => {this.setState({bData: data})}} /></div>
    </div>
  }
}
