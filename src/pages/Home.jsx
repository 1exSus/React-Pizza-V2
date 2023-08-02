import '../scss/app.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock';
import Skelleton from '../Components/PizzaBlock/Skelleton';
import { SearchContext } from '../App';
import axios from 'axios';
import Pagination from "../Components/pagination/Pagination";


const Home = () => {
  const dispatch = useDispatch();
  const { searchValue } = React.useContext(SearchContext);
  let [items, setItems] = React.useState([]);
  let [isLoading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(0)
  const { categoryId } = useSelector((state) => state.filter);
  const SortType = useSelector((state) => state.filter.sort);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    setLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = SortType.sortProparty.replace('-', '');
    const order = SortType.sortProparty.includes('-') ? 'desc' : 'asc';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://642c65c0208dfe25472f2d66.mockapi.io/pizza?page=${currentPage}${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      });
  }, [categoryId, SortType, searchValue, currentPage]);

  const skeleton = [...new Array(6)].map((_, index) => <Skelleton key={index} />);
  const PizzaItems = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => onChangeCategory(id)} />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : PizzaItems}</div>
      <div>
        <Pagination currentPage={currentPage} onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </div>
  );
};
  
export default Home;
