// src/App.js
import React from 'react';
import Register from './components/Register.jsx';
import { store } from '../redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Register />
      </div>
    </Provider>
  );
}

export default App;
