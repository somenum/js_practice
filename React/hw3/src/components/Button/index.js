const Button = ({
  bgc = "black",
  text = "Button",
  btnClName = "button",
  onClick = () => {},
}) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      style={{
        backgroundColor: bgc,
      }}
      className={btnClName}
    >
      {text}
    </button>
  );
};

export default Button;
