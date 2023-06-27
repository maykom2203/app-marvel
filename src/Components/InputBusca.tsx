import { useState, useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { marvelContext } from "../Context/marvelContext";
import { GetApi } from "../services/GetApi";
import { Character } from "../Interfaces/Icharacters";


const InputBusca: React.FC = () => {
  const { setState } = useContext(marvelContext);
  const [search, setSearch] = useState('');


  const navigate = useNavigate();
  function handleChancge(event: any) {
    setSearch(event.target.value)

  }


  useEffect(() => {
    setTimeout(() => {
      async function carresHeroi() {
        const Heroi: any = await GetApi();
        const pagina: any = [];
        Heroi.forEach((pags: any) => (
          pags.forEach((pg: any) => (
            pagina.push(pg)
          ))
        ))
        const filterCharacters = pagina.filter((Character: Character) => Character.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

        setState({
          characters: filterCharacters,
        });


        console.log(Heroi);
      }
      carresHeroi()
    }, 1000);
  }, [search, setState])

  function handleButton() {

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
          onClick={handleButton}

        >
          Pesquisar

        </button>
      </form>
    </div>
  )
}

export default InputBusca;
