import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { myAPI } from '../../context/context';
import './style.scss';
import axios from 'axios';

const SinglePage = () => {
   const { pageId } = useParams();
   const [movie, setMovie] = useState({});
   // const [query, setQuery] = useState('avenger');

   const getMovies = async (url) => {
      try {
         const res = await axios.get(url);
         const data = res.data;

         if (data.Response === 'True') {
            setMovie(data);
         }
      } catch (error) {}
   };

   useEffect(() => {
      getMovies(`${myAPI}&i=${pageId}`);
   }, [pageId]);

   return (
      <>
         <section className="single-post">
            <div className="container single-post-grid">
               <div className="img">
                  <img src={movie.Poster} alt={movie.Title} />
               </div>
               <div className="desc">
                  <h2>{movie.Title}</h2>
                  <p>Released Year {movie.Year}</p>
               </div>
            </div>
         </section>
      </>
   );
};

export default SinglePage;
