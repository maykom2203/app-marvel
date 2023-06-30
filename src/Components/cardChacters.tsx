import { useContext } from "react"
import { useNavigate } from 'react-router-dom';
import { Character } from "../Interfaces/Icharacters";
import { marvelContext } from "../Context/marvelContext";
import { ButtonDescrit, CardHeroi, CardDiv, Cardimg, H3 } from "../Styles/staled";


const CardCharacter: React.FC = () => {
  const { state, setState } = useContext(marvelContext);
  const navigate = useNavigate();

  function handleBuutonDecrition(id: number) {
    navigate('/descricaoHeroi')
    const filterId = state.characters.filter((character: Character) => character.id === id)

    setState({
      characters: filterId
    });
  }

  return (
    <CardDiv>
      {state.characters?.map((character: Character) => (
        <CardHeroi key={character.id}>
          <H3>{character.name}</H3>
          <Cardimg src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`} alt={character.name} />
          <ButtonDescrit type="button"
            onClick={() => handleBuutonDecrition(character.id)}
          >Description</ButtonDescrit>
        </CardHeroi>))}
    </CardDiv>

  )
}

export default CardCharacter;