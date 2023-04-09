import '../scss/app.scss';
import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock';
import Skelleton from '../Components/PizzaBlock/Skelleton';
import React from 'react';

function Home() {
  let [items, setItems] = React.useState([]);
  let [isLoading, setLoading] = React.useState(true);
  let [categoriId, setcategoriId] = React.useState(0);
  let [SortType, setSortType] = React.useState({ name: 'популярности', sortProparty: 'rating' });

  React.useEffect(() => {
    setLoading(true);
    const category = categoriId > 0 ? categoriId : '';
    const sortBy = SortType.sortProparty.split('-', '');
    const orderBy = SortType.sortProparty.replace('-') ? 'desc' : 'asc';

    fetch(
      `https://642c65c0208dfe25472f2d66.mockapi.io/items?category=${category}&sortBy=${sortBy}&orderBy=${orderBy}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setLoading(false);
      });
  }, [categoriId, SortType]);

  return (
    <div>
      <div className="content__top">
        <Categories value={categoriId} onClickCategory={(id) => setcategoriId(id)} />
        <Sort value={SortType} onClickSort={(obj) => setSortType(obj)} />
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
