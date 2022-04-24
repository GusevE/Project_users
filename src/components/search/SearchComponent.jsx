import {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../search/SearchComponent.css';

function SearchComponent() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Data);


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
    <div className='block'>
      <input type='text' className='search' placeholder='Поиск по имени или e-mail' value={enteredText} onChange={changeValue} />
      <div className='clear'>
        {enteredText ? <button onClick={clearFn}>Очистить фильтр</button> : <></>
        }</div>
    </div>
  );
}

export default SearchComponent;
