import { nanoid } from "@reduxjs/toolkit";

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

// import LunchDiningIcon from "@mui/icons-material/LunchDining";
// import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
// import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
// import SchoolIcon from "@mui/icons-material/School";
// import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
// import PushPinIcon from "@mui/icons-material/PushPin";

export const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const categories = [
  { name: "Food", icon: <LunchDiningIcon />, id: nanoid() },
  { name: "Transport", icon: <AirportShuttleIcon />, id: nanoid() },
  { name: "Bills", icon: <EmojiObjectsIcon />, id: nanoid() },
  { name: "Shopping", icon: <ShoppingCartIcon />, id: nanoid() },
  { name: "Health", icon: <HealthAndSafetyIcon />, id: nanoid() },
  { name: "Education", icon: <SchoolIcon />, id: nanoid() },
  { name: "Entertainment", icon: <SportsEsportsIcon />, id: nanoid() },
  { name: "Other", icon: <PushPinIcon />, id: nanoid() },
];

export const incomeCategories = [
  { name: "Salary", icon: <MonetizationOnOutlinedIcon />, id: 1 },
  { name: "Freelance", icon: <CurrencyExchangeOutlinedIcon />, id: 2 },
  { name: "Other", id: 3 },
];

export const payments = ["Cash", "Credit Card", "Debit Card", "Wallet"];
export const categoriesIcons = {
  Food: "🥪",
  Transport: "🚗",
  Bills: "💰",
  Shopping: "👜",
  Health: "⚕️",
  Education: "📚",
  Entertainment: "🎮",
  Entertainments: "🎮",
  Salary: "🤑",
  Freelance: "🫰",
  Other: "💰",
};
export const colors = {
  Food: "#0088FE",
  Transport: "#FFBB28",
  Bills: "#ffe066",
  Shopping: "#00C49F",
  Health: "#2f9e44",
  Education: "#1864ab",
  Entertainment: "#FF8042",
  Entertainments: "#FF8042",
  Salary: "#66d9e8",
  Freelance: "#5f3dc4",
  Other: "#862e9c",
};

export const filterCategories = [
  { name: "All", icon: <LunchDiningIcon />, id: 0 },
  { name: "Food", icon: <LunchDiningIcon />, id: 1 },
  { name: "Transport", icon: <AirportShuttleIcon />, id: 2 },
  { name: "Bills", icon: <EmojiObjectsIcon />, id: 3 },
  { name: "Shopping", icon: <ShoppingCartIcon />, id: 4 },
  { name: "Health", icon: <HealthAndSafetyIcon />, id: 5 },
  { name: "Education", icon: <SchoolIcon />, id: 6 },
  { name: "Entertainments", icon: <SportsEsportsIcon />, id: 7 },
  { name: "Salary", icon: <SportsEsportsIcon />, id: 8 },
  { name: "Freelance", icon: <SportsEsportsIcon />, id: 8 },
  { name: "Other", icon: <PushPinIcon />, id: 9 },
];
