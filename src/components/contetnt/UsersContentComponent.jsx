import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function UsersContentComponent(props) {
  const state = useSelector((state) => state.Data);

  const { data } = props;

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    const temp = [...state].filter((item) => item.id !== id);
    dispatch({ type: 'DATA', paylod: [...temp] });
  };
  
  


  return (
    <>
      {data.map((item, idx) => {
        return (
          <div key={idx} className='container__header'>
            <Link to={`/posts/${item.id}`}>
              <div className='item user action'> {item.username}</div>{' '}
            </Link>
            <div className='item action'> {item.address.city}</div>
            <div className='item action'>{item.company.name}</div>
            <div className='item action'> {item.email}</div>
            <div className='item action' onClick={() => handleRemoveItem(item.id)} style={{ cursor: 'pointer' }}>
              X
            </div>
          </div>
        );
      })}
    </>
  );
}
export default UsersContentComponent;
