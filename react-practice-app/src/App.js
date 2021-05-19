import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = (props) => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => setUsers((prevUsers) => [...prevUsers, { id: Math.random(), username, age }]);

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
