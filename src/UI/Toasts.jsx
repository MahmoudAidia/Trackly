import toast from "react-hot-toast";
import { CheckCircle, XCircle } from "lucide-react";
import "./Toasts.scss";

export const showSuccessToast = (message) => {
  toast.custom((t) => (
    <div className={`trackly-toast ${t.visible ? "enter" : "leave"}`}>
      <div className="icon success">
        <CheckCircle size={20} />
      </div>
      <div className="content">
        <span className="title">Success</span>
        <span className="message">{message}</span>
      </div>
    </div>
  ));
};

export const showErrorToast = (message) => {
  toast.custom((t) => (
    <div className={`trackly-toast ${t.visible ? "enter" : "leave"}`}>
      <div className="icon error">
        <XCircle size={20} />
      </div>
      <div className="content">
        <span className="title">Error</span>
        <span className="message">{message}</span>
      </div>
    </div>
  ));
};
