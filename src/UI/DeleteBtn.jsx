import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "./Loader";
import "./DeleteBtn.scss";

function DeleteBtn({ isLoading, deleteFn }) {
  return (
    <>
      {isLoading ? (
        <Loader size="small" />
      ) : (
        <button className="deleteBtn" onClick={() => deleteFn()}>
          <DeleteIcon />
        </button>
      )}
    </>
  );
}

export default DeleteBtn;
