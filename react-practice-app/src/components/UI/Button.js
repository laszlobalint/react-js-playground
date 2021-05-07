import classes from './Button.module.css';

const Card = (props) => (
  <button className={classes.Button} type={props.type || 'button'} onClick={props.onClick}>
    {props.children}
  </button>
);

export default Card;
