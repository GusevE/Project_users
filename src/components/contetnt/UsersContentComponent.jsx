import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { useState } from 'react';

function UsersContentComponent(props) {
  const state = useSelector((state) => state.Data);

  const { data } = props;

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    const temp = [...state].filter((item) => item.id !== id);
    dispatch({ type: 'DATA', paylod: [...temp] });
    setModalActive(false)
  };
  
  const [modalActive, setModalActive] = useState(false)


  return (
    <>
      {data.map((item, idx) => {
        return (
          <><div key={idx} className='container__header'>
            <Link to={`/posts/${item.id}`}>
              <div className='item user action'> {item.username}</div>
            </Link>
            <div> {item.address.city}</div>
            <div>{item.company.name}</div>
            <div> {item.email}</div>
            <div onClick={() => setModalActive(true)} style={{ cursor: 'pointer' }}>
              X
            </div>
          </div>
         </>
        );
      })}
       <Modal active={modalActive} setActive={setModalActive}>
              <p> Вы уверены, что хотите удалить пользователя?</p>
              <button onClick={() => handleRemoveItem()}> Да</button>
              <button  onClick={() => setModalActive(false)} > Нет</button>
            </Modal>
    </>
  );
}
export default UsersContentComponent;
