import './scss/app.scss';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import PizzaBlock from './Components/PizzaBlock';
import React from 'react';

function App() {
  let [items, setItems] = React.useState([]);

  React.useEffect(
    () =>
      fetch('https://642c65c0208dfe25472f2d66.mockapi.io/items')
        .then((res) => res.json())
        .then((res) => setItems(res)),
    [],
  );

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
