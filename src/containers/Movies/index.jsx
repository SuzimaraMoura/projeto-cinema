import Slider from "../../components/Slider";
import { useState, useEffect } from "react";
import {Container} from "./styles"


import { getUpcomingtMovies, getTopMovies } from "../../services/getData";

function Movies() {
  const [topMovies, setTopMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([getTopMovies(), getUpcomingtMovies()])
        .then(([topMovies, upcomingMovies]) => {
          setTopMovies(topMovies);
          setUpcomingMovies(upcomingMovies);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  }, []);

  return (
      
    <Container>
      {topMovies && <Slider info={topMovies} title={"Popular"} />}
      {upcomingMovies && <Slider info={upcomingMovies} title={"Em breve"} />}
    </Container>
  );
}
export default Movies;
