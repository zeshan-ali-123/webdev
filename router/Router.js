import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import Tours from './../Pages/Home';
import TourDetails from './../Pages/Home';
import Login from './../Pages/Home';
import Register from './../Pages/Home';
import SearchResultList from './../Pages/Home';
const Router = () => {
  return (
   <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/tours' element={<Tours/>}/>
    <Route path='/tours/:id' element={<TourDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/tours/search' element={<SearchResultList/>}/>
   </Routes>
  )
}

export default Router;