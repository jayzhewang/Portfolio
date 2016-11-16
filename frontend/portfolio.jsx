import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';

document.addEventListener('DOMContentLoaded', ()=>{
  // const store = configureStore();
  const base = document.getElementById('base');
  ReactDOM.render(<App />, base);
});
