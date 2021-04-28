import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //recupere l'id
const Description = () => {
  const { name } = useParams();
  const [movies, setmovies] = useState();
  async function getData() {
    try {
      const reponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${name}?api_key=43b746b767edc8522cb6200aa1821bcb`
      );
      console.log("reponsedddd :", reponse);

      setmovies(reponse);
    } catch (err) {}
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        boxShadow: "0 5px 8px #000",
        marginTop: 30,
      }}
    >
      <div>
        <img
          alt="example"
          src={`http://image.tmdb.org/t/p/w300${
            movies && movies.data.poster_path
          }`}
        />
      </div>
      <div>
        <h1
          style={{
            fontSize: 100,
            textAlign: "center",
          }}
        >
          {movies && movies.data.title}
        </h1>
        <p
          style={{
            fontSize: 30,
            textAlign: "center",
          }}
        >
          {movies && movies.data.overview}
        </p>
      </div>
    </div>
  );
};
export default Description;
