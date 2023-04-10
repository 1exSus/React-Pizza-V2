import './scss/app.scss';
import Header from './Components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <div className="wrapper">
        <Header
          searchValue={searchValue}
          setSearchValue={(textValue) => setSearchValue(textValue)}
        />
        <div className="content">
          <div className="container">
            <div>
              <Routes>
                <Route path="/" element={<Home searchValue={searchValue} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
