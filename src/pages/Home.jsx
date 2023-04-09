import '../scss/app.scss';
import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock';
import Skelleton from '../Components/PizzaBlock/Skelleton';
import React from 'react';

function Home() {
  let [items, setItems] = React.useState([]);
  let [isLoading, setLoading] = React.useState(true);

  React.useEffect(
    () =>
      fetch('https://642c65c0208dfe25472f2d66.mockapi.io/items')
        .then((res) => res.json())
        .then((res) => {
          setItems(res);
          setLoading(false);
        }),

    [],
  );

  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skelleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
