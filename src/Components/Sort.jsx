import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSort } from '../redux/slices/filterSlice';

const Sort = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const sortProparty = useSelector((state) => state.filter.sortProparty);
  const sort = useSelector((state) => state.filter.sort);

  const list = [
    { name: 'популярности(ASC)', sortProparty: 'rating' },
    { name: 'популярности(DESC)', sortProparty: '-rating' },
    { name: 'цене(ASC)', sortProparty: 'price' },
    { name: 'цене(DESC)', sortProparty: '-price' },
    { name: 'алфавиту(ASC)', sortProparty: 'title' },
    { name: 'алфавиту(DESC)', sortProparty: '-title' },
  ];

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(!open);
  };
  const sortRef = React.useRef();

  React.useEffect(() => {
    const handkeCkickOutside = (e) => {
      if (!e.composedPath().includes(sortRef.current)) {
        console.log('click outside');
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handkeCkickOutside);

    return () => document.body.removeEventListener('click', handkeCkickOutside);
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span
          onClick={() => {
            // onClickListItem(props.value);
            setOpen(!open);
          }}>
          {sort.name}
        </span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                onClick={() => onClickListItem(obj)}
                key={index}
                className={sort.sortProparty === obj.sortProparty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
