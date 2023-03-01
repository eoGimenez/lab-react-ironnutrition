import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({ searchDish }) {
  const [search, setSearch] = useState('');

  const searchHandler = (e) => {
    //e.preventDefault();
    setSearch(e.target.value);
    searchDish(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>
    
      <label>Search</label>
      <Input value={search} type="text" onChange={searchHandler} />
    </>
  );
}
export default Search;
