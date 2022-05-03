import SearchComponent from "../search/SearchComponent";
import FilterComponent from "../filter/FilterComponent";
import UsersComponent from "../contetnt/UsersComponent";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";

function HomePages() {
  const state = useSelector((state) => state.Data);
  const enteredText = useSelector((state) => state.Change);

  useEffect(() => {
    setData(state);
  }, [state]);

  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const pagination = (pageNumber) => setcurrentPage(pageNumber);
  const lastUsersIndex = currentPage * usersPerPage;
  const firstUsersIndex = lastUsersIndex - usersPerPage;
  const filterData = data.filter(
    (elem) =>
      elem.username.toLowerCase().includes(enteredText.toLowerCase()) ||
      elem.email.toLowerCase().includes(enteredText.toLowerCase())
  );
  const currentCountry = filterData.slice(firstUsersIndex, lastUsersIndex);

  const [latitude, setlatitude] = useState(83.0855165);
  const [longitude, setlongitude] = useState(54.8690551);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinats);
    } else {
      alert("Геолакация не поддержвается Вашим браузером");
    }
  };

  function getCoordinats(position) {
    setlatitude(position.coords.latitude);
    setlongitude(position.coords.longitude);
  }
  getLocation();

  return (
    <>
      <h1> Список пользователей</h1>
      <SearchComponent
        filterData={filterData}
        latitude={latitude}
        longitude={longitude}
      />
      <FilterComponent />
      <UsersComponent data={currentCountry} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filterData.length}
        pagination={pagination}
        currentPage={currentPage}
      />
    </>
  );
}
export default HomePages;
