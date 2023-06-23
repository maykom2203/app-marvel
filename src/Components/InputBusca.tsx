import { useState, useContext  } from "react"
import { useNavigate } from 'react-router-dom';
import { marvelContext } from "../Context/marvelContext";
import { GetApi } from "../services/GetApi";
import { Character } from "../Interfaces/Icharacters";


const InputBusca: React.FC = () => {
  const {setState} = useContext(marvelContext);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();
  function handleChancge(event: any) {   
    setSearch(event.target.value)
  
  }

  async function carriesCharacter() {
    const ApiCharacter = await GetApi();
    const filterCharacters = ApiCharacter.filter((Character:Character)=>search === Character.name)
    setState( {
      characters: filterCharacters,
    });
    console.log(ApiCharacter)
  }
 
  function handleButton(){
    carriesCharacter()
    navigate('/listMarvel') 
  }
  return (
    <div>
      <form>
        <label htmlFor="search-artist-input">
          <input
            type="text"
            data-testid="search-artist-input"
            onChange={handleChancge}
            value={search}
          >
          </input>
        </label>

        <button
          type="button"
        // disabled={ buttonHabilit }
          onClick={handleButton }

        >
          Pesquisar

        </button>
      </form>
    </div>
  )
}

export default InputBusca;