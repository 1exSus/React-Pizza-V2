import React from 'react';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы"
      />
    </div>
  );
}

export default Search;
