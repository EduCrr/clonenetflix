import React from "react";
import "./FeaturedMovie.css";
export default function FeaturedMovie({ item }) {
  let firsDate = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
      }}
    >
      <div className="featuredVertical">
        <div className="featuredHorizontal">
          <div className="featuredName">{item.original_name}</div>
          <div className="featuredInfo">
            <div className="featuredPoints">{item.vote_average} pontos</div>
            <div className="featuredYear">{firsDate.getFullYear()}</div>
            <div className="featuredSeasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons === 1 ? "" : "s"}
            </div>
            <div className="featuredDesc">{description}</div>
            <div className="featuredButtons">
              <a className="watch" href={`/watch/${item.id}`}>
                ⏯️ Assistir
              </a>
              <a className="list" href={`/list/add/${item.id}`}>
                ➕ Minha lista
              </a>
            </div>
            <div className="featuredGenres">
              <strong>Gêneros:</strong> {genres.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
