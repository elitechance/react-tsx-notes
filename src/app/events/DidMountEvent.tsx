import * as React from "react";
import * as ReactDOM from "react-dom";

export class DidMountEvent extends React.Component {
  private hide = {
    display: 'none'
  }
  componentWillMount() {
  }
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this));
  }
  
  render() {
    return <div style={this.hide}>Did mount event</div>
  }
};
