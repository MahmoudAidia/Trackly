import "./CategoryItem.scss";
function CategoryItem({ name, children, handleClick, category }) {
  return (
    <li
      className={`categoryItem ${category === name ? "active" : ""} ${children === undefined ? "colorName" : ""}`}
      onClick={() => handleClick(name)}
    >
      {children}
      <span>{name}</span>
    </li>
  );
}

export default CategoryItem;
