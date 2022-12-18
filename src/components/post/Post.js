import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import { RiPlayCircleFill } from 'react-icons/ri';
import './style.scss';

const Post = () => {
   const { movies } = useGlobalContext();
   return (
      <>
         <section className="posts">
            <div className="container">
               <div className="post-grid">
                  {movies.map((movie) => {
                     const { imdbID, Poster, Title, Year, Type } = movie;
                     const movieName = Title.substring(0, 15);
                     return (
                        <NavLink
                           to={`singlepage/${imdbID}`}
                           className="post"
                           key={imdbID}
                        >
                           <div className="post-thumbnail">
                              <img src={Poster} alt={Title} />
                           </div>
                           <div className="post-data">
                              <h2>
                                 {movieName.length >= 15
                                    ? `${movieName}...`
                                    : movieName}
                              </h2>
                              <div className="meta">
                                 <span>{Year}</span>
                                 <span>{Type}</span>
                              </div>
                           </div>
                           <RiPlayCircleFill className="post-icon" />
                        </NavLink>
                     );
                  })}
               </div>
            </div>
         </section>
      </>
   );
};

export default Post;
