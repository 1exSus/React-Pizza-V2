import React from 'react';
import styles from './Search.module.scss';

function Search(props) {
  return (
    <div className={styles.root}>
      <input
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы"
      />
    </div>
  );
}

export default Search;
