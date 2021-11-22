import React, { useState } from "react";
import "./MoviesRow.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
export default function MoviesRow({ data }) {
  const [scrollX, setScrollX] = useState(0);
  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  }
  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = data.items.results.length * 160;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  }
  return (
    <div className="movieRow">
      <h2>{data.title}</h2>
      <div onClick={handleLeftArrow} className="movieRowLeft">
        <NavigateBeforeIcon style={{ fontSize: "50px" }} />
      </div>
      <div onClick={handleRightArrow} className="movieRowRight">
        <NavigateNextIcon style={{ fontSize: "50px" }} />
      </div>
      <div className="moveiRow-listArea">
        <div
          className="movieRow-list"
          style={{
            marginLeft: scrollX,
            width: data.items.results.length * 160,
          }}
        >
          {data.items.results.length > 0 &&
            data.items.results.map((item, k) => (
              <div key={k} className="movieRow-item">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt={item.original_name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
