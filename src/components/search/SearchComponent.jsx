import {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../search/SearchComponent.module.css'

function SearchComponent({filterData}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Data);
  console.log(filterData)

  function changeValue(value) {
    dispatch({ type: 'CHANGE', payload: value.target.value });
    setEnteredText(value.target.value);
  }
  const [enteredText, setEnteredText] = useState('');
state.filter(
    (elem) =>
      elem.username.toLowerCase().includes(enteredText.toLowerCase()) || elem.email.toLowerCase().includes(enteredText.toLowerCase())
  );

  dispatch({ type: 'CHANGE', payload: enteredText });

  function clearFn() {
    setEnteredText('');
  }

  return (
    <div className={styles.block}>
      <input type='text' className={styles.search} placeholder='Поиск по имени или e-mail' value={enteredText} onChange={changeValue} />
      <p className={styles.block_quantity}> Всего пользователей: {filterData.length}</p>
      <div className={styles.clear}>
        {enteredText ? <button onClick={clearFn}>Очистить фильтр</button> : <></>
        }</div>
    </div>
  );
}

export default SearchComponent;
