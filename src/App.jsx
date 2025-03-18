
import './App.css'
// import SideBar from './Components/SideBar'
import { BrowserRouter, Routes, Route } from "react-router";
import Project from './pages/Project';
import Contract from './pages/Contract';
import  Dashboard  from './pages/Dashboard';
import Invoices from './pages/invoices';
import Reports from './pages/Reports';
import Tasks from './pages/tasks';
import Team from './pages/team';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Dashboard/>} />
      <Route path='/contract' element = {<Contract/>} />
      <Route path='/project' element = {<Project/>} />
      <Route path='/invoices' element = {<Invoices/>} />
      <Route path='/reports' element= {<Reports/>} />
      <Route path='/tasks' element= {<Tasks/>} />
      <Route path='/team' element= {<Team/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
