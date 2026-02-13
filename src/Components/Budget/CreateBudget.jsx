import "./CreateBudget.scss";
import { categories } from "../../helpers/constants";
import Categories from "../../UI/Categories";
import { useState } from "react";
import { useCreateData } from "../../hooks/useCreateData";
import { useAppContext } from "../../Context/AppContext";

function CreateBudget({ setShowModal }) {
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState(null);
  const { mutateAsync } = useCreateData({ collectionName: "budget" });
  const { userId } = useAppContext();

  async function handleCreateBudget() {
    const data = { category, limit, userId };
    const docRef = await mutateAsync(data);

    if (!docRef.id) throw new Error("Data wasn't sent to the server");
    else {
      setCategory("");
      setLimit(null);
      setShowModal(false);
    }
  }

  return (
    <div className="createBudget">
      <h4>Category</h4>
      <Categories
        categories={categories}
        formType={"expense"}
        setCategory={setCategory}
        category={category}
      />

      <div className="limit">
        <h4>Monthly Limit</h4>
        <input
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          type="number"
          min={0}
          placeholder="0.00"
        />
        <span>$</span>
      </div>

      <div className="buttons">
        <button className="cancel">Cancel</button>
        <button
          className={`create ${limit && category ? "active" : ""}`}
          disabled={!(limit && category)}
          onClick={() => handleCreateBudget()}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateBudget;
