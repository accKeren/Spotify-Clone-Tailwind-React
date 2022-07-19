import { Icon } from 'Icons'; 
import { NavLink } from 'react-router-dom';
function Menu(){
  
    return(
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink className={({ isActive }) =>isActive ? "bg-active h-10 gap-x-4 flex items-center text-sm font-semibold rounded text-white hover:text-white px-4" : "h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4"} to={"/"}>
                        <span>
                            <Icon name="home"/>
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>isActive ? "bg-active h-10 gap-x-4 flex items-center text-sm font-semibold rounded text-white hover:text-white px-4" : "h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4"} to={"/search"}>
                        <span>
                            <Icon name="search"/>
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({ isActive }) =>isActive ? "bg-active h-10 gap-x-4 flex items-center text-sm font-semibold rounded text-white hover:text-white px-4" : "h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4"} to={"/collection"}>
                        <span>
                            <Icon name="collection"/>
                        </span>
                        Kitaplığım
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Menu