import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { MdOutlineSettings,MdHome } from "react-icons/md";
import Home from './component/home';
import Setting from './component/setting'
import Detail from './component/detail';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className='flex p-5 shadow-md'>
            <NavLink to='home' className='basis-1/3  text-white '><MdHome size={28}/></NavLink>
            <h3 className='basis-1/3 text-white flex justify-center font-bold'>Amazone Makeup</h3>
            <NavLink to='setting'  className='basis-1/3  text-white '>
              <div className='flex justify-end'>
                <MdOutlineSettings size={28}/>
              </div>
            </NavLink>
          </nav>
        </header>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="home/detail" element={<Detail />} />
            <Route path="setting" element={<Setting />} />
          </Routes>
        
          <footer className="h-16 flex justify-center items-center bg-sky-400 mt-8" style={{ position: 'fixed',left: '0', width: '100%',bottom: '0',borderTop: '3px solid #207487'}}>
            <small className='font-lg text-white'>&copy; Copyright 2022, Bisrat-Tech, All Rights Reserved</small>
          </footer>
      </div>
    </Router>
  );
}

export default App;
