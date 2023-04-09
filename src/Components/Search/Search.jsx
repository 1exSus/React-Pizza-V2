import React from 'react';
import styles from './Search.module.scss';

function Search(props) {
  return (
    <div className={styles.root}>
      <input type="text" placeholder="Поиск по странице" />
    </div>
  );
}

export default Search;
