import "./Pagination.css";

function Pagination({
  usersPerPage,
  totalUsers,
  pagination,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number, i) => (
          <li key={i} className="item">
            <button
              className={currentPage === number ? "currentPage " : " page"}
              onClick={() => pagination(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Pagination;
