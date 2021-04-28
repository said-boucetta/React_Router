import axios from "axios";
import { useState, useEffect } from "react";
import Cart from "./Cart";
const Populartop = () => {
  const [movies, setmovies] = useState();
  async function getData() {
    try {
      const reponse = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=43b746b767edc8522cb6200aa1821bcb"
      );
      console.log("reponse :", reponse);
      const reponse2 = reponse.data.results;
      console.log("reponse2 :", reponse2);
      setmovies(reponse2); //pour pouvoir l'utiliser en dehors de la fonction
    } catch (err) {}
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {movies && movies.map((movie) => <Cart dataM={movie} key={movie.id} />)}
    </div>
  );
};

export default Populartop;
