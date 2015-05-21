# Reactorator
Mixin your mixins and decorate!



```js
import reactorator from 'reactorator';

import { Component } from 'react';
import { state } from 'react-router';

@reactorator(state)
class Nav extends Component {
  constructor() {
    super();
  }
  
  getInitialState() {
    return {
      currentPath: this.getPath()
    };
  }
  render() {
    return <h1>Hello { this.state.currentPath }</h1>;
  }
}
```
Takes in mixins that add functionality but do not depend on react lifecycle hooks. So things like react-routers state and navigation mixins work great. But if you try to add a mixin that do have a React lifecycle prop reactorator will throw.

It takes these mixins and adds them to the prototype of the Component using Object.assign.

There are other decorators out there that will work with React lifecycle mixins by creating a Higher Order Component but when you are using lots of mixins you end up wrapping your component several layers deep. This is meant to alliviate that pain.

_Take with babel es7.classDecorators option._