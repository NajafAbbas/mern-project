import React from 'react'
import Home from './Home/Home';
import Course from './Components/Course/Course';
import Contact from './Components/Contact';
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <>
   
   {/* <Home/>
   <Course/> */}
   <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/course' element = {<Course/>}/>
    <Route path='/Contact' element = {<Contact/>}/>


   </Routes>
    </>
  )
}

export default App;
