import React, { useEffect, useState } from 'react'
import Sidebar from './components/Admin/Sidebar/Sidebar'
import Item from './components/Admin/Item/Item'
import { Routes,Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import Category from './components/Admin/Category/Category'
import Material from './components/Admin/Material/Material'
import EditMaterial from './components/Admin/Material/Editmaterial'
import Signup from './components/Admin/Signup/Signup'
import ItemList from './components/Admin/Item/ItemList'
import CategoryList from './components/Admin/Category/CategoryList'
import EditItem from './components/Admin/Item/EditItem'
import ListMaterial from './components/Admin/Material/ListMaterial'
import EditCategory from './components/Admin/Category/EditCategory'
import Login from './login/Login'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); 
  }, []);

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="#" />;
  };



  return (
    <>
      <ToastContainer position="top-center" />
    <Routes>
       
    {/* <Route path="/" element={<Navigate to="/" />} /> */}
    <Route path="/admin" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
    <Route path="/dashboard" element={<PrivateRoute><Sidebar><Dashboard/> </Sidebar></PrivateRoute>}/>

    <Route path="/items" element={<PrivateRoute><Sidebar><Item/></Sidebar></PrivateRoute> } />
    <Route path="/item-list" element={<PrivateRoute><Sidebar><ItemList/></Sidebar></PrivateRoute> } />
    <Route path="/edititem/:id" element={<PrivateRoute><Sidebar><EditItem/></Sidebar></PrivateRoute> } />
    <Route path="/Edit-material/:id" element={<PrivateRoute><Sidebar><EditMaterial/></Sidebar></PrivateRoute>}/>
    <Route path="/material-list" element={<PrivateRoute><Sidebar><ListMaterial/></Sidebar></PrivateRoute>}/>
    <Route path="/category" element={<PrivateRoute><Sidebar><Category/></Sidebar></PrivateRoute>}/>
    <Route path="/category-list" element={<PrivateRoute><Sidebar><CategoryList/></Sidebar></PrivateRoute>}/>
    <Route path="/EditCategory/:id" element={<PrivateRoute><Sidebar><EditCategory/></Sidebar></PrivateRoute>}/>
    <Route path="/material" element={<PrivateRoute><Sidebar><Material/></Sidebar></PrivateRoute>}/>
    <Route path="/signup" element={<PrivateRoute><Sidebar><Signup/></Sidebar></PrivateRoute>}/>

    </Routes>


    </>

  )
}

export default App