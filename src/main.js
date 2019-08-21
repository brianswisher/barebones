const React = require('react');
const ReactDOM = require('react-dom');
const unique = require('uniq');

const data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

const { useState } = React;

const style = {
  backgroundColor: 'red',
  boxSizing: 'content-box',
  color: 'white',
  margin: 50,
  padding: 50
};

const Hello = ({arr}) => {
  let [payload, setPayload] = useState();

  if (!payload) {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        setPayload(data);
      });
  }

  return React.createElement('div', null,
    React.createElement('b', null, payload && payload.message || ''),
    `: ${arr}`
  );
}

const App = props => React.createElement('div', {style},
  React.createElement(Hello, {...props})
);

ReactDOM.render(
  React.createElement(App, {style, toWhat: 'World', arr: unique(data), head: 'hi'}, null),
  document.getElementById('root')
);
