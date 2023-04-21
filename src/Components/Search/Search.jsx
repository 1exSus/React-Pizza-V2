import React from 'react';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';
import { debounce } from 'lodash';

function Search() {
  const inputRef = React.useRef();
  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const { setSearchValue } = React.useContext(SearchContext);
  const [value, setValue] = React.useState('');

  const onChangeInput = (event) => {
    setValue(event.target.value);
    searchValueUpdate(event.target.value);
  };
  const searchValueUpdate = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onChangeInput(event)}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы"
      />
      {value && <button onClick={onClickClear}>Очистить</button>}
    </div>
  );
}

export default Search;
