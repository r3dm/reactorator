# Reactorator
Mixin your mixins and decorate!



```js
import reactorator from 'reactorator';

import { Component } from 'react';
import { state, navigation } from 'react-router';

@reactorator(state, navigation)
class Nav extends Component {
  constructor() {
    super();
  }
  
  render() {
    const path = this.getPath();
    return <h1>Hello { path }</h1>;
  }
}
```
Takes in mixins that add functionality. But if you try to add mixins that do have a React lifecycle prop reactorator will warn you and let you decide how to continue.

It takes mixins and adds them to the prototype of the Component using Object.assign.

There are other decorators out there that will work with React lifecycle mixins by creating a Higher Order Component but when you are using lots of mixins you end up wrapping your component several layers deep. This is meant to alliviate that pain.

_Take with babel es7.classDecorators option._