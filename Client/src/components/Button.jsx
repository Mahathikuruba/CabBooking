function Button(props) {
  function handleClick() {
    alert("Button Clicked!");
  }

  return <button onClick={handleClick}>{props.title}</button>;
}

export default Button;
