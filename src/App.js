import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './component/home';
import Detail from './component/detail';
import Setting from './component/setting'
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/setting'>Setting</NavLink>
            <NavLink to='/detail'>Detail</NavLink>
          </nav>
        </header>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
