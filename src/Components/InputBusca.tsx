import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { marvelContext } from "../Context/marvelContext";
import { ApiKey, url } from "../services/GetApi";
import { H1, InputSearch, FormDiv, ButtonDescrit, LabelDiv, SvgLupa } from "../Styles/staled"




const InputBusca: React.FC = () => {
  const { setState } = useContext(marvelContext);
  const [search, setSearch] = useState('');


  const navigate = useNavigate();
  function handleChancge(event: any) {
    setSearch(event.target.value)

  }
  async function filterHeroi() {
    const ApiCharacters = url;
    if (search) {
      const key = ApiKey();
      const urlFilter = `${ApiCharacters}&nameStartsWith=${search.toLocaleLowerCase()}&${key}`
      const response = await fetch(urlFilter);
      const database = await response.json();

      setState({
        characters: database.data.results,
      });
    }
  }


  function handleButton() {
    filterHeroi()
    navigate('/listMarvel')
  }
  return (
    <>
      <H1>Super Herois Marvel</H1>
      <FormDiv>
        <LabelDiv htmlFor="SeachHeroi">

          <InputSearch
            type="text"
            id="SeachHeroi"
            onChange={handleChancge}
            value={search}
            placeholder="Pesquise seu Heroi:"
          >
          </InputSearch>
          <SvgLupa viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </SvgLupa>
        </LabelDiv>

        <ButtonDescrit
          type="button"
          onClick={handleButton}
        >

          Pesquisar

        </ButtonDescrit>
      </FormDiv>
    </>
  )
}

export default InputBusca;
