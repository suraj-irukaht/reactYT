import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
// context is like warehouse
//provider is like deliver boy
//consumer useContent() : data consumer
const AppContext = React.createContext();

// we need to create a provider function
//the app provider function work like delivery boy in that certain area
// if we wrap <App /> with this function then any of the children can get that from it

export const myAPI = `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [movies, setMovies] = useState([]);
   const [isError, setIsError] = useState({ show: 'false', msg: '' });
   const [query, setQuery] = useState('avenger');

   const getMovies = async (url) => {
      try {
         const res = await axios.get(url);
         const data = res.data;

         if (data.Response === 'True') {
            setIsLoading(false);
            setMovies(data.Search);
         } else {
            setIsError({
               show: true,
               msg: data.Error,
            });
         }
      } catch (error) {}
   };

   useEffect(() => {
      getMovies(`${myAPI}&s=${query}`);
   }, [query]);

   return (
      <AppContext.Provider
         value={{ isError, isLoading, movies, query, setQuery }}
      >
         {children}
      </AppContext.Provider>
   );
};

const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
