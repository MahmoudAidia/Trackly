import "./Num.scss";

function Num({ num, handleClick }) {
  return (
    <button
      onClick={() =>
        handleClick((prev) => (prev !== "0" ? prev + `${num}` : `${num}`))
      }
      className="num"
    >
      {num}
    </button>
  );
}

export default Num;
