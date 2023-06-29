import { marvelContext } from "../Context/marvelContext";
import { useContext } from "react"
import { Character } from "../Interfaces/Icharacters";
import { useNavigate } from "react-router-dom";
import { H1Descrit, H2, P, DescritDiv, DescritDivMan, Img, ButtonDescrit } from "../Styles/staled"


const CardDescricaoChacters: React.FC = () => {
  const { state } = useContext(marvelContext);
  const navigate = useNavigate();
  function HandleButtonHome() {
    navigate('/homePage')
  }

  return (
    <DescritDivMan>
      {state.characters.map((character: Character) => (
        <DescritDiv key={character.id}>
          <H1Descrit>{character.name}</H1Descrit>
          <Img src={`${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`} alt={character.name} />
          <H2>Descrição:</H2>
          <P>{character.description}</P>
          <ButtonDescrit
            type="button"
            onClick={HandleButtonHome}
          >
            Voltar Pagina Inicial
          </ButtonDescrit>
        </DescritDiv>
      ))}
    </DescritDivMan>
  )
}

export default CardDescricaoChacters;