const Button = (props) => {
  return (
    <button className="submit-btn" onClick={props.onClick} >
      {props.text}
    </button>
  );
};

export default Button


