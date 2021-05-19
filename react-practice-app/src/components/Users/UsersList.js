import classes from './UsersList.module.css';
import Card from '../UI/Card';

const UsersList = (props) => (
  <Card className={classes.Users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          Username: {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  </Card>
);

export default UsersList;
