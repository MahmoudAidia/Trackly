import { useState } from "react";
import { useFetchData } from "../../hooks/useFetchData.js";
import { useAppContext } from "../../Context/AppContext.jsx";
import { formatCurrency } from "../../helpers/formatCurrency.js";

import BudgetItem from "../../Components/Budget/BudgetItem";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CreateBudget from "../../Components/Budget/CreateBudget";
import Modal from "../../UI/Modal.jsx";
import GrothBar from "../../Components/Budget/GrothBar.jsx";
import Loader from "../../UI/Loader.jsx";
import NoData from "../../UI/NoData.jsx";

import "./Budget.scss";

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

  if (isLoadingBudgets || isLoadingExpenses)
    return (
      <div className="loaderBox">
        <Loader />;
      </div>
    );

  const totalBudgets = budgets?.reduce(
    (acc, item) => Number(item.limit) + acc,
    0,
  );

  const totalExpenses = expenses
    ?.filter((item) => item.type === "expense")
    .reduce((acc, item) => item.value + acc, 0);

  const percent = Math.ceil((totalExpenses / totalBudgets) * 100);
  const expensePerCategory = {};
  for (const item of expenses) {
    if (expensePerCategory[item.category]) {
      expensePerCategory[item.category]?.push(item.value);
    } else {
      expensePerCategory[item.category] = [item.value];
    }
  }
  const balance = totalBudgets - totalExpenses;

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
            {balance > 0 ? formatCurrency(balance) : formatCurrency(0)}{" "}
            remaining
          </p>
        </div>
      </div>
      <div className="budgetList">
        {budgets.length === 0 ? (
          <NoData text={"There are no Budgets yet!!"} />
        ) : (
          budgets?.map((item) => (
            <BudgetItem
              totalBudgets={totalBudgets}
              limit={item.limit}
              category={item.category}
              expenses={expensePerCategory[item.category]}
            />
          ))
        )}
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
