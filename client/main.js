import React from 'react';
import { render } from 'react-dom';

import Header from './components/header';

const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

Meteor.startup(() => {
  render(<App />, document.querySelector('#root'));
});
