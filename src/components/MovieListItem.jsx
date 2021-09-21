import React from 'react'
import { useDispatch } from "react-redux";
import { fetchDetail } from "../Redux/action/Action";
import { useHistory } from "react-router-dom";

const MovieListItem = ({movie}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {poster_path,title,name,release_date,first_air_date,overview}=movie

    const image_url = "http://image.tmdb.org/t/p/w500";

    
  // hadleclick for onClick event of image
  const handleClick = (movieDetail) => {
    dispatch(fetchDetail(movieDetail)); // sending movieDetail of the clicked image to redux
    history.push("/detail");
  };

    return (
        <>
            <div className="movieContainer"  onClick={() => handleClick(movie)}>
                  <div className="movieImageContainer ">
                    <img
                      src={`${image_url}${poster_path}`}
                      alt={title ? title : name}
                      className="movieImage shadow"
                     
                    />
                  </div>
                  <div className="infoContainer">
                    <p className="mb-0">
                      {overview}
                    </p>

                    <span >{(release_date) ? release_date : first_air_date }</span>
                    
                  </div>
                </div>
        </>
    )
}

export default MovieListItem
