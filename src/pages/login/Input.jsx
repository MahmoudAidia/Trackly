import "./Input.scss";
function Input({ type, placeholder, name }) {
  return (
    <div>
      <label htmlFor={type}>{name}</label>
      <input type={type} name={type} id={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
