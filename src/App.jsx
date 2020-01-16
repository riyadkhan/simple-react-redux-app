import React from 'react';
import './App.css';
import Users from './components/Users';
import { Provider } from 'react-redux';
import store from './store/store';
import SingleUser from './components/SingleUser';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h2 className='text-center'>User List</h2>
        <SingleUser />
        <br/>
        <Users />
      </div>
    </Provider>
  );
}

export default App;
