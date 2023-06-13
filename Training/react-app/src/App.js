import { useState } from 'react';
import './App.css';
import AddUsers from './Components/AddUsers';
import AddProfile from './Components/AddProfile';
import UsersList from './Components/UsersList';
import { Provider } from 'react-redux';
import myAppStore from './Redux/store'


function App() {
  return (
    <>

      {/* create store and provide in root level */}
      <Provider store={myAppStore}>
        {/* adduser - dispatch action */}
        <AddUsers />
        {/*  add user as profile */}
        <AddProfile />
        {/* userlist to get from store */}
        <UsersList />
      </Provider>
    </>

  )
}

export default App;


