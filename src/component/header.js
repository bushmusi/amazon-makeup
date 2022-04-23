import { NavLink } from 'react-router-dom';
import { MdOutlineSettings, MdHome } from 'react-icons/md';

export default function Home() {
  return (
    <header className="App-header">
      <nav className="flex p-5 shadow-md">
        <NavLink to="home" className="basis-1/3  text-white "><MdHome size={28} /></NavLink>
        <h3 className="basis-1/3 text-white flex justify-center font-bold">Amazone Makeup</h3>
        <NavLink to="setting" className="basis-1/3  text-white ">
          <div className="flex justify-end">
            <MdOutlineSettings size={28} />
          </div>
        </NavLink>
      </nav>
    </header>
  );
}
