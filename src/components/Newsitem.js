import React from "react";

const Newsitem = (props)=>{
    let { title, description, imageURL, newsURL , author , date} = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageURL
                ? "https://static.vecteezy.com/system/resources/previews/000/681/862/original/live-breaking-news-banner-with-global-map.jpg"
                : imageURL
            }
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsURL} target="_blank " className="btn btn-secondary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );

}

export default Newsitem;
