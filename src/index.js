import assign from 'object.assign';
import warning from 'warning';

const slice = Array.prototype.slice;
const __DEV__ = process.env.NODE_ENV !== 'production';
const REACT_PROTECTED = [
  'mixins',
  'statics',
  'propTypes',
  'contextTypes',
  'childContextTypes',
  'getDefaultProps',
  'getInitialState',
  'getChildContext',
  'render',
  'componentWillMount',
  'componentDidMount',
  'componentWillReceiveProps',
  'shouldComponentUpdate',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount',
  'updateComponent'
];

export default function reactorator(mixins) {
  mixins = slice.call(arguments);
  mixins.forEach(mixin => {
    Object.keys(mixin).forEach(prop => {
      if (__DEV__) {
        warning(
          REACT_PROTECTED.indexOf(prop) === -1,
          'reactorator should get mixins that do not feature react ' +
          'lifecycle hooks but found %s',
          prop
        );
      }
    });
  });
  return function reactorate(Component) {
    mixins.forEach(mixin => {
      assign(Component.prototype, mixin);
    });
    return Component;
  };
}
