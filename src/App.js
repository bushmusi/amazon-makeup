import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Setting from './component/setting';
import Detail from './component/detail';
import Header from './component/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="setting" element={<Setting />} />
        </Routes>

        <footer
          className="h-16 flex justify-center items-center bg-sky-400 mt-8"
          style={{
            position: 'fixed', left: '0', width: '100%', bottom: '0', borderTop: '3px solid #207487',
          }}
        >
          <small className="font-lg text-white">&copy; Copyright 2022, Bisrat-Tech, All Rights Reserved</small>
        </footer>
      </div>
    </Router>
  );
}

export default App;
