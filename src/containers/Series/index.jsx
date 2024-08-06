import { Container } from "./styles";
import { useState, useEffect } from "react";
import Slider from "../../components/Slider"
import { getTopSeries, getPopularSeries, getMaisRecentesSeries } from "../../services/getData";

function Series() {
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [maisRecentesSeries, setMaisRecentesSeries] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([getTopSeries(), getPopularSeries(), getMaisRecentesSeries()])
        .then(([topSeries, popularSeries, maisRecentesSeries]) => {
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setMaisRecentesSeries(maisRecentesSeries);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  }, []);

  return (
    <Container>
       {topSeries && <Slider info={topSeries} title={"Top Series"} />}
       {popularSeries &&  <Slider info={popularSeries} title={"Popular Series"} /> }
       {maisRecentesSeries && <Slider info={maisRecentesSeries} title={"Series Recentes"} />}
     
      
    </Container>
  );
}
export default Series;
