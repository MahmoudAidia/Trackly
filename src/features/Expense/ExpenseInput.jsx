function ExpenseInput({ value = "", handleOnChange, fieldName, fieldType }) {
  return (
    <div>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input
        name={fieldName}
        id={fieldName}
        type={fieldType}
        onChange={(e) => handleOnChange(e.target.value)}
        value={value}
        min={fieldType === "number" ? 1 : null}
      />
    </div>
  );
}

export default ExpenseInput;
