import React from "react";
import CategoryItem from "../Components/AddExpense/CategoryItem";
import { categoriesIcons } from "../helpers/constants";

function Categories({
  formType,
  incomeCategories,
  setCategory,
  category,
  categories,
}) {
  return (
    <ul className="category">
      {formType === "income"
        ? incomeCategories.map((item) => (
            <CategoryItem
              handleClick={setCategory}
              category={category}
              key={item.id}
              name={item.name}
            >
              {categoriesIcons[item.name]}
            </CategoryItem>
          ))
        : categories.map((item) => (
            <CategoryItem
              handleClick={setCategory}
              category={category}
              key={item.id}
              name={item.name}
            >
              {categoriesIcons[item.name]}
            </CategoryItem>
          ))}
    </ul>
  );
}

export default Categories;
