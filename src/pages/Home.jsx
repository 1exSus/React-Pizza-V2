import '../scss/app.scss';
import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock';
import Skelleton from '../Components/PizzaBlock/Skelleton';
import React from 'react';
import ReactPagination from '../Components/pagination/Pagination';

function Home(props) {
  let [items, setItems] = React.useState([]);
  let [isLoading, setLoading] = React.useState(true);
  let [categoriId, setcategoriId] = React.useState(0);
  let [SortType, setSortType] = React.useState({ name: 'популярности', sortProparty: 'rating' });

  React.useEffect(() => {
    setLoading(true);
    const category = categoriId > 0 ? `category=${categoriId}` : '';
    const sortBy = SortType.sortProparty.replace('-', '');
    const order = SortType.sortProparty.includes('-') ? 'desc' : 'asc';
    const search = props.searchValue ? `&search=${props.searchValue}` : '';

    fetch(
      `https://642c65c0208dfe25472f2d66.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setLoading(false);
      });
  }, [categoriId, SortType, props.searchValue]);

  const skeleton = [...new Array(6)].map((_, index) => <Skelleton key={index} />);
  const PizzaItems = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  // const PizzaItems = items
  //   .filter((obj) => {
  //     if (obj.title.toLowerCase().includes(props.searchValue.toLowerCase())) {
  //       return true;
  //     }
  //     return false;
  //   })
  //   .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  return (
    <div>
      <div className="content__top">
        <Categories value={categoriId} onClickCategory={(id) => setcategoriId(id)} />
        <Sort value={SortType} onClickSort={(obj) => setSortType(obj)} />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : PizzaItems}</div>
      <div>
        <ReactPagination />
      </div>
    </div>
  );
}

export default Home;
