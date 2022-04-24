import '../contetnt/UsersComponetn.css'
import UsersContentComponent from "./UsersContentComponent";
import NoUsers from "../nousers/NoUsers";

function UsersComponent ({data}) {

  

return(
        <div className="container">
                <div className="header">
                    <div className="item"> Имя пользователя</div>
                    <div className="item"> Город</div>
                    <div className="item"> Организация</div>
                    <div className="item"> Сайт</div>
                </div>
                {data.length ?
                 ( 
                        <UsersContentComponent data={data}/>
                )
                :
                <NoUsers />
                }
        </div>
)
}
export default UsersComponent