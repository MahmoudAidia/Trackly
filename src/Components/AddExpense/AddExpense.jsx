import "./AddExpense.scss";
import { useState } from "react";
import { auth } from "../../Firebase/firebase";
import { nanoid } from "@reduxjs/toolkit";
import { useCreateData } from "../../hooks/useCreateData";
import { showErrorToast, showSuccessToast } from "../../UI/Toasts";

import BackspaceIcon from "@mui/icons-material/Backspace";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PushPinIcon from "@mui/icons-material/PushPin";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import Loader from "../../UI/Loader";

import Num from "./Num";
import CategoryItem from "./CategoryItem";
import Categories from "../../UI/Categories";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0];
const categories = [
  { name: "Food", icon: <LunchDiningIcon />, id: nanoid() },
  { name: "Transport", icon: <AirportShuttleIcon />, id: nanoid() },
  { name: "Bills", icon: <EmojiObjectsIcon />, id: nanoid() },
  { name: "Shopping", icon: <ShoppingCartIcon />, id: nanoid() },
  { name: "Health", icon: <HealthAndSafetyIcon />, id: nanoid() },
  { name: "Education", icon: <SchoolIcon />, id: nanoid() },
  { name: "Entertainment", icon: <SportsEsportsIcon />, id: nanoid() },
  { name: "Other", icon: <PushPinIcon />, id: nanoid() },
];
const incomeCategories = [
  { name: "Salary", icon: <MonetizationOnOutlinedIcon />, id: 1 },
  { name: "Freelance", icon: <CurrencyExchangeOutlinedIcon />, id: 2 },
  { name: "Other", id: 3 },
];
const payments = ["Cash", "Credit Card", "Debit Card", "Wallet"];
function AddExpense({ setShowModal }) {
  const [formType, setFormType] = useState("expense");
  const [money, setMoney] = useState("0");
  const [category, setCategory] = useState("");
  const [payment, setPayment] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync } = useCreateData({ collectionName: "expense" });

  async function handleSubmit() {
    const currentUser = auth.currentUser;
    if (!money) {
      showErrorToast("Please enter the amount of money.");
      return;
    }
    if (!category) {
      showErrorToast("Please enter the category.");
      return;
    }
    if (!payment) {
      showErrorToast("Please enter payment type.");
      return;
    }
    if (!date) {
      showErrorToast("Please enter the date.");
      return;
    }
    // if (!money || !category || !payment || !date || !currentUser) {
    //   console.log("Inputs are not filled");
    //   return;
    // }
    const newExpense = {
      value: Number(money),
      type: formType,
      userId: currentUser.uid,
      desc: note,
      category,
      payment,
      date,
    };

    setIsLoading(true);
    const docRef = await mutateAsync(newExpense);

    if (!docRef.id) {
      showErrorToast("Could not add this transactions.");
    } else {
      showSuccessToast("Added transaction successfully.");
      setIsLoading(false);
      setMoney("0");
      setCategory("");
      setPayment("");
      setNote("");
      setDate("");
    }
    setShowModal(false);
  }
  return (
    <div className="addExpense">
      <div className="type">
        <span
          onClick={() => setFormType("expense")}
          className={`${formType === "expense" ? "active" : ""}`}
        >
          Expense
        </span>
        <span
          onClick={() => setFormType("income")}
          className={`${formType === "income" ? "active" : ""}`}
        >
          Income
        </span>
      </div>

      <div className="amount">
        <span>Amount</span>
        <span className="money">${money}</span>
      </div>

      <div className="numsGrid">
        {nums.map((item, index) => (
          <Num key={index} handleClick={setMoney} num={item} />
        ))}
        <button
          className="num"
          onClick={() =>
            setMoney((prev) =>
              prev.slice(0, -1).length === 0 ? "0" : prev.slice(0, -1),
            )
          }
        >
          <BackspaceIcon />
        </button>
      </div>

      <Categories
        formType={formType}
        setCategory={setCategory}
        categories={categories}
        incomeCategories={incomeCategories}
        category={category}
      />
      <ul className="payments">
        {payments.map((item) => (
          <CategoryItem
            key={item}
            name={item}
            category={payment}
            handleClick={setPayment}
          />
        ))}
      </ul>
      <div className="dateBox">
        <label htmlFor="date">Date</label>
        <input
          name="date"
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="dateBox">
        <label htmlFor="note">Note (Optional)</label>
        <textarea
          name="note"
          id="note"
          type="text"
          className="note"
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <button className="btn" onClick={handleSubmit}>
        {isLoading ? <Loader size="small" /> : "Save Transation"}
      </button>
    </div>
  );
}

export default AddExpense;
