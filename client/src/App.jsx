import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthorForm from './components/AuthorForm'
import AuthorsList from './components/AuthorsList'
import EditAuthor from './components/EditAuthor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
  <h2>Favorite Authors</h2>
   <>
   <Routes>
    <Route exact path='/authors' element={<AuthorsList/>}></Route>
    <Route exact path='/authors/new' element={<AuthorForm/>}></Route>
    <Route exact path='/authors/:id/edit' element={<EditAuthor/>}></Route>
    

   </Routes>

   </>
   </BrowserRouter>
  )
}

export default App
