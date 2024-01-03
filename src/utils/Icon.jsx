import { LuCircleDashed as Backlog } from "react-icons/lu";
import { PiCircleHalfFill as InProgress } from "react-icons/pi";
import { MdCheckCircle as Done } from "react-icons/md";
import { FaRegCircle as Todo } from "react-icons/fa";
import { BsFillXCircleFill as Canceled, BsThreeDots as NoPriority, BsExclamationSquareFill as Urgent } from "react-icons/bs";
import HighPriority from "../assets/icons/high-priority.svg";
import MediumPriority from "../assets/icons/medium-priority.svg";
import LowPriority from "../assets/icons/low-priority.svg";

export const getStatusIcon = (status) => {
  switch (status) {
    case "Backlog":
      return <Backlog size={18}/>;
    case "Todo":
      return <Todo size={18} color={"gray"} />;
    case "In progress":
      return <InProgress size={20} color={"#F1CA49"} />;
    case "Done":
      return <Done size={20} color={"#5E6AD2"} />;
    case "Canceled":
      return <Canceled size={18} color={"gray"} />;
    default:
      return <Canceled size={18} color={"gray"} />;
  }
}

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 0:
      return <NoPriority size={18} color={"#697077"} />;
    case 1:
      return <img src={LowPriority} width={18} height={18} alt="low priority icon"/>;
    case 2:
      return <img src={MediumPriority} width={18} height={18} alt="meidum priority icon"/>;
    case 3:
      return <img src={HighPriority} width={18} height={18} alt="high priority icon"/>;
    case 4:
      return <Urgent size={18} color={"#FC7840"} />;
    default:
      return <NoPriority size={18} color={"#697077"} />;
  }
}

export const getUserIcon = (user) => {
  return <img className="user-icon" alt="user avatar" src={`https://ui-avatars.com/api/?name=${user}&background=random`} width="20px" height="20px" />
}