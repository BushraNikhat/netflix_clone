import React from "react";
import MovieList from "../components/MovieList";
import request from "../request"

const Home = ({type}) => {


  return (
    <>
      <div className="home ">
        <div className="row g-0 flex-grow-1 ">
          <div className="col-11 mx-auto ">
           

             

        {/* based on 'type props' recieved from App.js component rendering the MovieList component. */}

          {(type==="home") ? (
            <>
              <MovieList title="Popular on Netflix" fetchUrl={request.popular}/>
              <MovieList title="New on Netflix" fetchUrl={request.trending}/>
              <MovieList title="Coming This Week" fetchUrl={request.upcomingMovie}/>
            </>
           
          ) : (type==="movies") ? (
            <>
            <MovieList title="New Movies" fetchUrl={request.newMovie}/>
              <MovieList title="Trending Movies" fetchUrl={request.trending}/>
              <MovieList title="Top Rated" fetchUrl={request.topRated}/>
            </>
           
          ) : (
            <>
              <MovieList title="Today Showing" fetchUrl={request.airingToday}/>
              <MovieList title="Popular Shows" fetchUrl={request.popularShow}/>
              <MovieList title="Top Rated Show" fetchUrl={request.topRatedShow}/>
            </>
           
          )

          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
