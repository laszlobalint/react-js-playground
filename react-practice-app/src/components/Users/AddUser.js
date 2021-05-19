import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => setUsername(event.target.value);

  const ageChangeHandler = (event) => setAge(event.target.value);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || username.trim().age === 0 || +age < 1) {
      setError({ title: 'Invalid input(s)', message: 'Please, enter a valid name and an age (non-empty avalues)!' });
      return;
    }

    props.onAddUser(username, age);

    setUsername('');
    setAge('');
  };

  const errorHandler = () => setError(null);

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.Input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={username} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
