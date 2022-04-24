
import { useDispatch, useSelector } from 'react-redux';
import './FilterComponent.css'
function FilterComponent(){

    const state = useSelector(state => state.Data)
    const dispatch = useDispatch()

    // const listName = state.sort(function (a, b) {
    //     return ('' + a.username).localeCompare(b.username);
    // })
    // const listCompany = state.sort(function (a, b) {
    //     return ('' + a.company.name).localeCompare(b.company.name);
    // })
    
    const sortName = () => {
            const listName = state.sort( (a, b) => ('' + a.username).localeCompare(b.username)   
        )
        dispatch({type: 'DATA', paylod: [...listName]})
    }

    const sortCompany = () => {
        const listCompany = state.sort( (a, b) => ('' + a.company.name).localeCompare(b.company.name)   
    )
    dispatch({type: 'DATA', paylod: [...listCompany]})
}


   
    
    return(
            <div className="filter">
            
                    <ul>
                        
                        <li >Сортировка:</li>
                        <li onClick={sortName} >Город</li>
                        <li onClick={sortCompany}> Компания</li>
                    </ul>
                   

            </div>
    )
}
export default FilterComponent;