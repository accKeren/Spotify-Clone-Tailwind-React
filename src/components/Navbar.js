import Navigation from "./Navbar/Navigation"
import Home from "views/Home"
import Auth from "./Navbar/Auth"
import Search from "views/Search"
import Collection from "views/Collection"
import { Routes, Route } from 'react-router-dom';
function Navbar(){

  
    return (
       <nav className="h-[3.75rem] flex items-center justify-between px-7">
            <Navigation />

            <Auth />
       </nav>
    )
}
export default Navbar