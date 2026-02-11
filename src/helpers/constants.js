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

export const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const categories = [
  { name: "Food", icon: <LunchDiningIcon />, id: nanoid() },
  { name: "Transport", icon: <AirportShuttleIcon />, id: nanoid() },
  { name: "Bills", icon: <EmojiObjectsIcon />, id: nanoid() },
  { name: "Shopping", icon: <ShoppingCartIcon />, id: nanoid() },
  { name: "Health", icon: <HealthAndSafetyIcon />, id: nanoid() },
  { name: "Education", icon: <SchoolIcon />, id: nanoid() },
  { name: "Entertainments", icon: <SportsEsportsIcon />, id: nanoid() },
  { name: "Other", icon: <PushPinIcon />, id: nanoid() },
];

export const incomeCategories = [
  { name: "Salary", icon: <MonetizationOnOutlinedIcon />, id: 1 },
  { name: "Freelance", icon: <CurrencyExchangeOutlinedIcon />, id: 2 },
  { name: "Other", id: 3 },
];

export const payments = ["Cash", "Credit Card", "Debit Card", "Wallet"];
