import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import Navbar from './Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders the navigation bar component', () => {
  const app = shallow(<App />);
  expect(app.contains(<Navbar />)).toEqual(true);
});
