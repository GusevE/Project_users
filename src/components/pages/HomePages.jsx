import SearchComponent from '../search/SearchComponent';
import FilterComponent from '../filter/FilterComponent';
import UsersComponent from '../contetnt/UsersComponent';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';

function HomePages() {
  const state = useSelector((state) => state.Data);
  const enteredText = useSelector((state) => state.Change);

  useEffect(() => {
    setData(state);
  }, [state]);

  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [countriesPerPage] = useState(4);
  const pagination = (pageNumber) => setcurrentPage(pageNumber);
  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const filterData = data.filter((elem) =>
      elem.username.toLowerCase().includes(enteredText.toLowerCase()) || elem.email.toLowerCase().includes(enteredText.toLowerCase()));
  const currentCountry = filterData.slice(firstCountryIndex, lastCountryIndex);


  return (
    <>
          <h1> Список пользователей</h1>
      <SearchComponent filterData={filterData} />
      <FilterComponent  />
      <UsersComponent data={currentCountry} />
      <Pagination countriesPerPage={countriesPerPage} totalCountry={filterData.length} pagination={pagination} />
    </>
  );
}
export default HomePages;
