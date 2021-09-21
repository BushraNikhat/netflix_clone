import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { PlayCircleFilledOutlined } from "@material-ui/icons";

const MovieDetail = () => {
  const state = useSelector((state) => state.detailReducer);
  const { poster_path, title, name, vote_average, overview } = state;
  const image_url = "http://image.tmdb.org/t/p/w500";

  let style = {
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,.8) 40%, rgba(0, 0, 0, 0)),url(${image_url}${poster_path})`,
  };

  return (
    <>
      <div className="movieDetail" style={style}>
        <div className="row ">
          <div className="col-11 mx-auto detailColumn">

            <div className="row">
              <div className="col-lg-6 col-md-7 col-sm-10 col-12  detailContainer d-flex flex-column justify-content-center">
              
                <div className="detailTop">
                  <h4 className="mb-0">
                    NETFLIX <span>ORIGINAL</span>
                  </h4>
                  <h1 className="mb-0">{title ? title : name}</h1>
                  <span className="text-success me-2 fw-bold">Rating</span>
                  <span>{vote_average}</span>
                </div>

                <div className="detailCenter mt-3">
                  <span> {overview}</span>
                </div>

                <div className="detailBottom mt-3">
                  <Button className="btn">
                    {" "}
                    <PlayCircleFilledOutlined className="me-1" />
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
