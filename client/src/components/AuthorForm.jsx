import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AuthorForm = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/authors", { name: name })
      .then((res) => {
        console.log(res.data);
        navigate("/authors");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  return (
    <>
      <Link to={"/authors"}>Home</Link>
      <p>Add a new author : </p>

      <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
        <label>Name : </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type="button" onClick={() => navigate("/authors")}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default AuthorForm;
