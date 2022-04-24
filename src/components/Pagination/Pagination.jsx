import './Pagination.css'

function Pagination({countriesPerPage,totalCountry, pagination}){
    const pageNumbers =[]

    for(let  i=1; i<= Math.ceil(totalCountry/countriesPerPage); i++){

        pageNumbers.push(i)
    }

    return(

      <div >
            <ul className="pagination">
                {pageNumbers.map(number => (
                        <li className="item">
                       
                            <button onClick={() => pagination(number)}> { number}</button>
                        </li>
                    ))
                }
            </ul>
      </div>
    )
}
export default Pagination