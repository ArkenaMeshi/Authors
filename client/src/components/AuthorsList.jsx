import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css"

const AuthorsList=()=>{
    const[authorslist,setAuthorsList]=useState([])
    const navigate= useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:8000/authors")
        .then((res)=>{console.log(res.data); setAuthorsList(res.data)})
        .catch((err)=>console.log(err))

    },[])

    const deleteAuthor=(id) =>{
        axios.delete(`http://localhost:8000/authors/${id}`)
        .then( res => {
            console.log(res.data);
            setAuthorsList((prevAuthors)=>
            prevAuthors.filter((author)=>author._id !== id)
            )
             
        })
        .catch( err => console.log(err) );
    }
    return(
        <>
        <Link to={"/authors/new"}>Add an author</Link>
        <p>We have quotes by : </p>
       <table>
        <thead>
            <tr>
                <td>Author</td>
                <td>Actions Available </td>
            </tr>
        </thead>
        {
            authorslist.length>0 && 
            authorslist.map((author,index)=>{
                return(
                    <tbody key={index}>
                        <tr>
                            <td>{author.name}</td>
                            <td>
                                <button className="edit" onClick={()=>navigate(`/authors/${author._id}/edit`)}>Edit</button>
                                <button className="delete"  onClick={() =>deleteAuthor(author._id)}>Delete</button>
                            </td>
                        </tr>

                    </tbody>
                )
            })

        }

       </table>

        </>
    )
}
export default AuthorsList;