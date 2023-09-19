import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditAuthor = (props) => {
  const { id } = useParams();
  const [name, setName] = useState();
  const navigate = useNavigate();
  const[errors,setErrors]=useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:8000/authors/${id}`)
      .then((res) => {
        console.log(res);
        setName(res.data.name)
      })
      .catch((err) => console.log(err));
  }, []);

  const updateAuthor = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/authors/${id}`, {
       name,
      })
      .then((res) => {
        console.log(res);
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


  }

  return (
    <div>
    <Link to={"/authors"}>Home</Link>
    <p>Edit this author</p>
      <form onSubmit={updateAuthor}>
      {errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
       
          <label>Name :</label>
          <input
            type="text"
           defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
      <button type="button" onClick={() => navigate("/authors")}>Cancel</button>
      <button type="submit">Submit</button>
        
      </form>
    </div>
  );
};
export default EditAuthor;