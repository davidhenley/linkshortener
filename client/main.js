import React from 'react';
import { render } from 'react-dom';

import Header from './components/header';
import LinkCreate from './components/link_create';

const App = () => {
  return (
    <div className="app">
      <Header />
      <LinkCreate />
    </div>
  );
};

Meteor.startup(() => {
  render(<App />, document.querySelector('#root'));
});
