import './scss/app.scss';
import Header from './Components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header
          // searchValue={searchValue}
          // setSearchValue={(textValue) => setSearchValue(textValue)}
          />
          <div className="content">
            <div className="container">
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
