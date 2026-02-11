import { ChevronLeft, ChevronRight, MovingOutlined } from "@mui/icons-material";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import "./overview.scss";
import { formatCurrency } from "../../helpers/formatCurrency";
function Overview({ totalBalance, totalIncome, totalExpenses }) {
  console.log(totalExpenses, totalIncome);
  return (
    <div className="overview">
      <div className="text">
        <span>Welcome back</span>
        <h2>Financial Overview</h2>
      </div>

      <div className="carousel">
        <button>
          <ChevronLeft />
        </button>
        <p>November 2025</p>
        <button>
          <ChevronRight />
        </button>
      </div>

      <div className="content">
        <div className="title">
          <WalletOutlinedIcon />
          <span>Total Balance</span>
        </div>
        <h2 className="money">{formatCurrency(totalBalance)}</h2>
        <div className="incomeExpensesBox">
          <div className="incomeBox">
            <div>
              <MovingOutlined />
              <span>Income</span>
            </div>
            <span className="incomeMoney">{formatCurrency(totalIncome)}</span>
          </div>
          <div className="expenseBox">
            <div>
              <TrendingDownOutlinedIcon />
              <span>Expenses</span>
            </div>
            <span className="expenseMoney">
              {formatCurrency(totalExpenses)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
