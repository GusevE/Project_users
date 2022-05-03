import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import styles from "../search/SearchComponent.module.css";
import Weather from "../Weather/Weather";

function SearchComponent({ filterData, latitude, longitude }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Data);
  const API_KEY = "bd10066a0d6afcc406117b703fa1aa4f";
  const [data, setData] = useState(null);

  function changeValue(value) {
    dispatch({ type: "CHANGE", payload: value.target.value });
    setEnteredText(value.target.value);
  }
  const [enteredText, setEnteredText] = useState("");
  state.filter(
    (elem) =>
      elem.username.toLowerCase().includes(enteredText.toLowerCase()) ||
      elem.email.toLowerCase().includes(enteredText.toLowerCase())
  );

  dispatch({ type: "CHANGE", payload: enteredText });

  function clearFn() {
    setEnteredText("");
  }

  useEffect(() => {
    async function exampleFetch() {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${longitude}&lon=${latitude}&limit=${1}&appid=${API_KEY}`
      );
      const json = await response.json();
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${json[0].name}&appid=${API_KEY}&units=metric`
      );
      const jsonTwo = await result.json();
      setData(jsonTwo);
    }
    exampleFetch();
  }, [latitude, longitude]);

  return (
    <div className={styles.block}>
      <div className="block__one">
        <input
          type="text"
          className={styles.search}
          placeholder="Поиск по имени или e-mail"
          value={enteredText}
          onChange={changeValue}
        />
        <p className={styles.block_quantity}>
          Всего пользователей: {filterData.length}
        </p>
        <div className={styles.clear}>
          {enteredText ? (
            <button onClick={clearFn}>Очистить фильтр</button>
          ) : (
            <></>
          )}
        </div>
        <></>
      </div>
      {data ? (
        <div className="weather">
          <Weather data={data} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default SearchComponent;
