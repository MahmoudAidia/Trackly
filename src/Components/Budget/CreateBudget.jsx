import "./CreateBudget.scss";
import { categories } from "../../helpers/constants";
import Categories from "../../UI/Categories";
import { useState } from "react";
import { useCreateData } from "../../hooks/useCreateData";
import { useAppContext } from "../../Context/AppContext";
import { showErrorToast, showSuccessToast } from "../../UI/Toasts";
import Loader from "../../UI/Loader";
import { useCreateUpdateBudget } from "../../hooks/useCreateUpdateBudget";
function CreateBudget({ setShowModal }) {
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync } = useCreateData({ collectionName: "budget" });

  const { userId } = useAppContext();

  const { mutateAsync: mutateBudget } = useCreateUpdateBudget();

  async function handleCreateBudget() {
    if (!category) {
      showErrorToast("Please specify category.");
      return;
    }
    if (!limit) {
      showErrorToast("Please specify the amount of money.");
      return;
    }
    setIsLoading(true);
    const data = { category, limit: Number(limit), userId };
    const { created, updated } = await mutateBudget(data);
    // const docRef = await mutateAsync(data);

    if (!created && !updated) {
      showErrorToast("Could not add budget. Something went wrong");
      setIsLoading(false);
      throw new Error("Data wasn't sent to the server");
    }
    if (created) {
      showSuccessToast("Created budget successfully.");
    } else if (updated) {
      showSuccessToast("Updated budget successfully.");
    }
    setCategory("");
    setLimit(null);
    setShowModal(false);
    setIsLoading(false);
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
          {isLoading ? <Loader size="small" /> : "Create"}
        </button>
      </div>
    </div>
  );
}

export default CreateBudget;
