import React from 'react'
import store from './Features/Store'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Table from './Components/Table';
import EditStudent from './Components/EditStudent';
import AddNew from "./Components/AddNew"
import ContactUs from './Components/ContactUs'
import PageNotFound from './Components/PageNotFound'
import './App.css'
import NavBar from './Components/NavBar';


const App = () => {
  return (
    <>
       <Provider store={store}>
        <BrowserRouter>
        <NavBar/>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/student' element={<Table/>}/>
              <Route path='/editStudent' element={<EditStudent/>}/>
              <Route path='/addNew' element={<AddNew/>}/>
              <Route path='/contactUs' element={<ContactUs/>} />
              <Route path='*' element={<PageNotFound/>}/>
           </Routes>
        </BrowserRouter>
       </Provider>
    </>
  )
}

export default App