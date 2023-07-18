import React from 'react'
import Sidebar from './components/Admin/Sidebar/Sidebar'
import Item from './components/Admin/Item/Item'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import Category from './components/Admin/Category/Category'
import Material from './components/Admin/Material/Material'
import Signup from './components/Admin/Signup/Signup'
import ItemList from './components/Admin/Item/ItemList'
import CategoryList from './components/Admin/Category/CategoryList'



const App = () => {

  return (
    <>
    <Routes>
    <Route path="/dashboard" element={<Sidebar><Dashboard/> </Sidebar>}/>
    <Route path="/items" element={<Sidebar><Item/></Sidebar> } />
    <Route path="/item-list" element={<Sidebar><ItemList/></Sidebar> } />
    <Route path="/category" element={<Sidebar><Category/></Sidebar>}/>
    <Route path="/category-list" element={<Sidebar><CategoryList/></Sidebar>}/>
    <Route path="/material" element={<Sidebar><Material/></Sidebar>}/>
    <Route path="/signup" element={<Sidebar><Signup/></Sidebar>}/>
    </Routes>


    </>

  )
}

export default App