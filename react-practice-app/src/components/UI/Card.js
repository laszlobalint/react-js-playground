import classes from './Card.module.css';

const Card = (props) => <div className={`${classes.Card} ${props.className}`}>{props.children}</div>;

export default Card;
