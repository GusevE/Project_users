import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Post from "./Post";


 const  PostGet = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [id]);

    return(
            <div>

{user && (
    <>
    <Post user={user}/>
    </>
)}

            </div>
    )
 }
 export {PostGet}