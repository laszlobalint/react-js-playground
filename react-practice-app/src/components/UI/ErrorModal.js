import classes from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.Backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.Modal}>
        <header className={classes.Header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.Content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.Actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
