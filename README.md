# Notes for ReactJS using TSX

## Changing values of stateless component using stateful component

* See [TimeManager](https://github.com/elitechance/react-tsx-notes/blob/master/src/app/stateful/TimeManager.tsx)

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


## React events [example](https://github.com/elitechance/react-tsx-notes/blob/master/src/app/events/DidMountEvent.tsx)

* Reference [link](https://reactjs.org/docs/events.html)

## Passing data between components

* See [InputDataManager](https://github.com/elitechance/react-tsx-notes/blob/master/src/app/stateful/InputDataManager.tsx)