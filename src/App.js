import React, { useState } from "react";
import "./styles.css";

const genre = {
  fiction: [
    { name: "Avatar", rating: "5/5" },
    { name: "Avenger", rating: "5/5" }
  ],

  comedy: [
    { name: "Hera Pheri", rating: "5/5" },
    { name: "jump street", rating: "4/5" }
  ]
};

export default function App() {
  const [genreName, setGenre] = useState("fiction");

  function clickHandler(genreName) {
    setGenre(genreName);
  }

  return (
    <div className="App">
      <h1>📚 Good Movies</h1>
      <p>Checkout my favourite books Select a genre to get </p>

      <div>
        {Object.keys(genre).map((genreName) => (
          <button
            style={{
              fontSize: "1.2rem",
              padding: "10px",
              marginLeft: "10px",
              borderRadius: "10px"
            }}
            onClick={() => clickHandler(genreName)}
          >
            {genreName}
          </button>
        ))}
      </div>

      <hr />

      <div
        style={{
          textAlign: "left"
        }}
      >
        <ul>
          {genre[genreName].map((movie) => (
            <li
              key={movie.name}
              style={{
                padding: "5px",
                listStyle: "none",
                border: "1px solid  grey",
                borderRadius: "5px",
                marginBottom: "5px"
              }}
            >
              <div
                style={{
                  padding: "5px",
                  fontSize: "larger",
                  fontWeight: "bold"
                }}
              >
                {movie.name}
              </div>
              <div style={{ fontSize: "small", marginRight: "5px" }}>
                rating : {movie.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
