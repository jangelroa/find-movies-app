import React from "react";
import "./MainSection.scss";

const movies = [
    {
        Title: "The Matrix Reloaded",
        Year: "2003",
        Rated: "R",
        Released: "15 May 2003",
        Runtime: "138 min",
        Genre: "Action, Sci-Fi",
        Director: "Lana Wachowski, Lilly Wachowski",
        Writer: "Lilly Wachowski, Lana Wachowski",
        Actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        Plot: "Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.",
        Language: "English, French",
        Country: "United States",
        Awards: "8 wins & 34 nominations",
        Poster: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        Ratings: [
        {
        Source: "Internet Movie Database",
        Value: "7.2/10"
        },
        {
        Source: "Rotten Tomatoes",
        Value: "73%"
        },
        {
        Source: "Metacritic",
        Value: "62/100"
        }
        ],
        Metascore: "62",
        imdbRating: "7.2",
        imdbVotes: "526,243",
        imdbID: "tt0234215",
        Type: "movie",
        DVD: "15 Aug 2008",
        BoxOffice: "$281,576,461",
        Production: "Warner Brothers, Silver Pictures",
        Website: "N/A",
        Response: "True"
        },
        {
        Title: "Avatar",
        Year: "2009",
        Rated: "PG-13",
        Released: "18 Dec 2009",
        Runtime: "162 min",
        Genre: "Action, Adventure, Fantasy, Sci-Fi",
        Director: "James Cameron",
        Writer: "James Cameron",
        Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        Plot: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        Language: "English, Spanish",
        Country: "USA, UK",
        Awards: "Won 3 Oscars. Another 86 wins & 130 nominations.",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        Ratings: [
            {
                Source: "Internet Movie Database",
                Value: "7.8/10"
            },
            {
                Source: "Rotten Tomatoes",
                Value: "82%"
            },
            {
                Source: "Metacritic",
                Value: "83/100"
            }
        ],
        Metascore: "83",
        imdbRating: "7.8",
        imdbVotes: "1,139,497",
        imdbID: "tt0499549",
        Type: "movie",
        DVD: "10 Feb 2016",
        BoxOffice: "$760,507,625",
        Production: "Dune, Lightstorm Entertainment, Ingenious Film Partners",
        Website: "N/A",
        Response: "True"
    },
];

export default function MainSection() {
    return (
        <div className="movie-wrapper">
            { movies.map(movie => {
                return (
                    <div className="movie" key={movie.imdbID}>
                        <img className="movie-image" src={movie.Poster} />
                    </div>
                );
            })}
        </div>
    );
}
