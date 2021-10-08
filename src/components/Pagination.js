import React, { useEffect } from "react";
import "../css/Pagination.css";

const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.pageCount / props.perPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
      console.log(pageNumbers);
  }, [props])
  return (
    <nav className="pagination1">
      <ul className="pagination1">
        <input type="button" value="<" className="page-btn" />
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => props.paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <input type="button" value=">" className="page-btn" />
      </ul>
    </nav>
  );
};
export default Pagination;
