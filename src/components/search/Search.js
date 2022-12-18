import { useState } from 'react';
import { useGlobalContext } from '../../context/context';
import './style.scss';

const Search = () => {
   const { query, setQuery, isError } = useGlobalContext();
   const [value, setValue] = useState(query);
   return (
      <>
         <section className="search-wrap">
            <div className="container">
               <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                     <input
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                     />
                     <button className="search" onClick={() => setQuery(value)}>
                        Search
                     </button>
                  </div>
                  <div className="error-msg">{isError.show && isError.msg}</div>
               </form>
            </div>
         </section>
      </>
   );
};

export default Search;
