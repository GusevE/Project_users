import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./FilterComponent.css";
function FilterComponent() {
  const state = useSelector((state) => state.Data);
  const dispatch = useDispatch();

  const [isPress, setIsPress] = useState(true);
  const sortName = () => {
    const listName = state.sort((a, b) =>
      ("" + a.username).localeCompare(b.username)
    );
    dispatch({ type: "DATA", paylod: [...listName] });
    setIsPress(true);
  };

  const sortCompany = () => {
    const listCompany = state.sort((a, b) =>
      ("" + a.company.name).localeCompare(b.company.name)
    );
    dispatch({ type: "DATA", paylod: [...listCompany] });
    setIsPress(false);
  };

  return (
    <div className="filter">
      <ul>
        <li>Сортировка:</li>
        <li
          onClick={sortName}
          className={isPress ? "filter__action" : "filter__pass"}
        >
          Имя
        </li>
        <li
          onClick={sortCompany}
          className={isPress ? "filter__pass" : "filter__action"}
        >
          Компания
        </li>
      </ul>
    </div>
  );
}
export default FilterComponent;
