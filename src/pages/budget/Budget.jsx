import BudgetItem from "../../Components/Budget/BudgetItem";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "./Budget.scss";
import { useState } from "react";
import CreateBudget from "../../Components/Budget/CreateBudget";
import Modal from "../../UI/Modal.jsx";
import { useFetchData } from "../../hooks/useFetchData.js";
import { useAppContext } from "../../Context/AppContext.jsx";
import Loader from "../../UI/Loader.jsx";
import { formatCurrency } from "../../helpers/formatCurrency.js";
import GrothBar from "../../Components/Budget/GrothBar.jsx";

function Budget() {
  const [showCreateBudget, setShowCreateBudget] = useState(false);
  const { userId } = useAppContext();
  const { data: expenses, isLoading: isLoadingExpenses } = useFetchData({
    collectionName: "expense",
    userId,
  });

  const { data: budgets, isLoading: isLoadingBudgets } = useFetchData({
    collectionName: "budget",
    userId,
  });

  if (isLoadingBudgets || isLoadingExpenses) return <Loader />;

  const totalBudgets = budgets?.reduce(
    (acc, item) => Number(item.limit) + acc,
    0,
  );
  const totalExpenses = expenses?.reduce((acc, item) => item.value + acc, 0);
  const percent = Math.ceil((totalExpenses / totalBudgets) * 100);
  const expensePerCategory = {};
  for (const item of expenses) {
    if (expensePerCategory[item.category]) {
      expensePerCategory[item.category]?.push(item.value);
    } else {
      expensePerCategory[item.category] = [item.value];
    }
  }
  console.log(expensePerCategory);

  return (
    <div className="budget">
      <div className="header">
        <h3>
          <span>Budgets</span>
          <button onClick={() => setShowCreateBudget((prev) => !prev)}>
            <AddOutlinedIcon />
          </button>
        </h3>

        <div className="monthBudgets">
          <h3>Monthly Budget</h3>
          <p>
            {formatCurrency(totalExpenses)} / {formatCurrency(totalBudgets)}
          </p>
          <GrothBar percent={percent} />
          <p className="remain">
            {formatCurrency(totalBudgets - totalExpenses)} remaining
          </p>
        </div>
      </div>
      <div className="budgetList">
        {budgets?.map((item) => (
          <BudgetItem
            totalBudgets={totalBudgets}
            limit={item.limit}
            category={item.category}
            expenses={expensePerCategory[item.category]}
          />
        ))}
      </div>

      {showCreateBudget && (
        <Modal
          isOpen={showCreateBudget}
          onClose={setShowCreateBudget}
          title="Create Budget"
        >
          <CreateBudget setShowModal={setShowCreateBudget} />
        </Modal>
      )}
    </div>
  );
}

export default Budget;
