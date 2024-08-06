import getImages from "../../utils/getImages";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

function Card({ item }) {
  const navigate = useNavigate();
  return (
    <Container>
      <img
        src={getImages(item.poster_path || item.profile_path || " ")}
        alt="Imagem Card"
      />

      <h3>{item.title || item.name}</h3>
    </Container>
  );
}
export default Card;
