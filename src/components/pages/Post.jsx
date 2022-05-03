import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Post.css";

function Post({ user }) {
  console.log(user);
  const preloadedValues = {
    name: user.name,
    firstName: user.username,
    email: user.email,
    street: user.address.street,
    city: user.address.city,
    zipcode: user.address.zipcode,
    phone: user.phone,
    website: user.website,
  };

  const { register, handleSubmit } = useForm({
    defaultValues: preloadedValues,
  });


  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const [action, setAction] = useState(true);
  const activForms = () => {
    setAction(!action);
  };

  return (
    <div>
      <h2> Личная карточка</h2>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            <input
              {...register("name", {
                required: true,
              })}
              disabled={action}
            />
          </label>
          <label>
            User name:
            <input
              {...register("firstName", {
                required: true,
              })}
              disabled={action}
            />
          </label>
          <label>
            E-mail:
            <input
              {...register("email", {
                required: true,
              })}
              disabled={action}
            />
          </label>
          <label>
            Street:
            <input
              {...register("street", {
                required: true,
              })}
              disabled={action}
            />
          </label>
          <label>
            City:
            <input
              {...register("city", {
                required: true,
              })}
              disabled={action}
            />
          </label>
          <label>
            Zip code
            <input
              {...register("zipcode", {
                required: true,
              })}
              disabled={action}
            />
          </label>
          <label>
            Phone
            <input
              {...register("phone", {
                required: true,
              })}
              disabled={action}
            />
          </label>
          <label>
            Website
            <input
              {...register("website", {
                required: true,
              })}
              disabled={action}
            />
          </label>
          <label>
            Comment:
            <textarea {...register("Comment")} cols="100" rows="5"></textarea>
          </label>
          <input className="submit" type="submit" />
        </form>
        <button className="editForm" onClick={activForms}>
          Редактировать
        </button>
      </div>
    </div>
  );
}
export default Post;
