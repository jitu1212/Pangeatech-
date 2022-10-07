import { useEffect, useState } from "react";

const Pagination = ({ perPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = counter * perPage;
    onPaginationChange(value - perPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / perPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="buttons">
      <button className="btn" onClick={() => onButtonClick("prev")}>Prev</button>
      <button className="btn" onClick={() => onButtonClick("next")}>Next</button>
    </div>
  );
};

export default Pagination;