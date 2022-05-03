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
    setModalActive(null);
  };

  const [modalActive, setModalActive] = useState(null);

  return (
    <>
      {data.map((item, idx) => {
        return (
            <div key={idx} className='container__header'>
              <Link   to={`/posts/${item.id}`}>
                <div className='item user action'> {item.username}</div>
              </Link>
              <div> {item.address.city}</div>
              <div>{item.company.name}</div>
              <div> {item.email}</div>
              <div className='close' onClick={() => setModalActive(item)} style={{ cursor: 'pointer' }}>
                X
              </div>
            </div>
        );
      })}
      <Modal active={!!modalActive} setActive={setModalActive}>
        <p className='modal_text'> Вы уверены, что хотите удалить пользователя?</p>
        <div className='buttom'>
          <button className='btn' onClick={() => handleRemoveItem(modalActive.id)}>
            Да
          </button>
          <button className='btn' onClick={() => setModalActive(false)}>
            Нет
          </button>
        </div>
      </Modal>
    </>
  );
}
export default UsersContentComponent;
