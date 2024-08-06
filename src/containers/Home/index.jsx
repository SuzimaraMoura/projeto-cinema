import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import Slider from "../../components/Slider";
import getImages from "../../utils/getImages";
import Modal from "../../components/Modal";
import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from "./styles";
import {
  getMostPopularMovie,
  getTopMovies,
  getTopSeries,
  getPopularSeries,
  getTopPeople,
} from "../../services/getData";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [mostPopularMovie, setMostPopularMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMostPopularMovie(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ])
        .then(
          ([
            mostPopularMovie,
            topMovies,
            topSeries,
            popularSeries,
            topPeople,
          ]) => {
            setMostPopularMovie(mostPopularMovie);
            setTopMovies(topMovies);
            setTopSeries(topSeries);
            setPopularSeries(popularSeries);
            setTopPeople(topPeople);
          }
        )
        .catch((error) => console.error(error));
    }

    getAllData();
  }, []);

  return (
    <>
      {mostPopularMovie && (
        <Background image={getImages(mostPopularMovie.backdrop_path)}>
          {showModal && (
            <Modal movieId={mostPopularMovie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{mostPopularMovie.title}</h1>
              <p>{mostPopularMovie.overview}</p>
              <ContainerButtons>
                <Button
                  red={true}
                  onClick={() => navigate(`/detalhe/${mostPopularMovie.id}`)}
                >
                  Assista Agora
                </Button>
                <Button red={false} onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={getImages(mostPopularMovie.poster_path)}
                alt="Capa do Filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Series"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Popular Series"} />
      )}
      {topPeople && <Slider info={topPeople} title={"Top Artistas"} />}
    </>
  );
}
export default Home;
