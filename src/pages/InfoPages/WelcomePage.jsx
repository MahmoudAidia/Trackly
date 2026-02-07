import { useState } from "react";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WelcomeComponent from "./WelcomeComponent";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import { Link } from "react-router";
import "./WelcomePage.scss";
import { ChevronRight } from "@mui/icons-material";

const components = [
  {
    id: 1,
    icon: <MovingOutlinedIcon />,
    text: "Record every transaction in seconds and never lose track of your spending",
    title: "Track your expenses easily",
  },
  {
    id: 2,
    icon: <DataUsageOutlinedIcon />,
    text: "Understand your spending patterns with beautiful, intuitive visualizations",
    title: "Visualize spending with smart charts",
  },
  {
    id: 3,
    icon: <TaskAltOutlinedIcon />,
    text: "Create budgets for different categories and stay on track with your goals",
    title: "Set budgets & financial goals",
  },
  {
    id: 4,
    icon: <DescriptionOutlinedIcon />,
    text: "Receive detailed reports and actionable insights to improve your finances",
    title: "Get insights & monthly reports",
  },
];

function WelcomePage() {
  const [counter, setCounter] = useState(0);
  let item =
    counter < 3 && counter >= 0 ? components[counter] : components.at(-1);
  return (
    <div className="WelcomePage">
      <Link className="skip" to="/login">
        Skip
      </Link>
      {
        <WelcomeComponent
          key={item.id}
          text={item.text}
          title={item.title}
          icon={item.icon}
          counter={counter}
        />
      }
      <div className="btnContainer">
        {counter === 3 ? (
          <>
            <Link to="/login">
              <span>Get Started</span>

              <ChevronRightOutlinedIcon />
            </Link>
          </>
        ) : (
          <button
            onClick={() =>
              setCounter((counter) =>
                counter < 3 ? (counter += 1) : (counter = 3),
              )
            }
          >
            <span>Next</span>
            <ChevronRightOutlinedIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default WelcomePage;
