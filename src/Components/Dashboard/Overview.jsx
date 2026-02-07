import { ChevronLeft, ChevronRight, MovingOutlined } from "@mui/icons-material";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import "./overview.scss";
function Overview() {
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
        <h2 className="money">$2,877.02</h2>
        <div className="incomeExpensesBox">
          <div className="incomeBox">
            <div>
              <MovingOutlined />
              <span>Income</span>
            </div>
            <span className="incomeMoney">$3,700.00</span>
          </div>
          <div className="expenseBox">
            <div>
              <TrendingDownOutlinedIcon />
              <span>Expenses</span>
            </div>
            <span className="expenseMoney">$3,700.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
