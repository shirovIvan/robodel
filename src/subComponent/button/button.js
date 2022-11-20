import './button.scss'

const Button = (props) => {
    return (
      <div className="App">
        <button className="primary-button">{props.textBtn}</button>
      </div>
    );
  }
 
  export default Button;
  