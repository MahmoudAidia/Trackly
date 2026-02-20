import "./Input.scss";
function Input({ type, placeholder, name, handleChange, value }) {
  return (
    <div>
      <label htmlFor={type}>{name}</label>
      <input
        value={value}
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
