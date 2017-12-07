# Notes for ReactJS using TSX

## Changing values of stateless component using stateful component

* See ./stateful/TimeManager

## Events life cycle

| Mounting             | Updating component properties | Update component state  | Updating using forceUpdate() |
| -------------------- |:-----------------------------:|:-----------------------:|:----------------------------:|
| constructor()        |                               |                         |                              |
| componentWillMount() |                               |                         |                              |
|                      | componentWillReceiveProps()   |                         |                              |
|                      | shouldComponentUpdate()       | shouldComponentUpdate() |                              |
|                      | componentWillUpdate()         | componentWillUpdate()   | componentWillUpdate()        |
| render()             | render()                      | render()                | render()                     |
|                      | componentDidUpdate()          | componentDidUpdate()    | componentDidUpdate()         |
| componentDidMount()  |                               |                         |                              |

* See ./events/DidMountEvent

## React events

* Visit this [link](https://reactjs.org/docs/events.html)

## Passing data between components

* See ./stateful/InputDataManager.tsx