import Header from "../Components/header";
import CardCharacter from "../Components/cardChacters";
import { GetApiAll } from "../services/GetApi";
import { useContext, useEffect } from "react"
import { marvelContext } from "../Context/marvelContext";

const HomePage: React.FC = () => {
  const { setState } = useContext(marvelContext);


  useEffect(() => {
    async function allHeroi() {
      const ApiCharacters = await GetApiAll();
      setState({
        characters: ApiCharacters,
      });

    }
    allHeroi()

  }, [setState]);




  return (


    <div>
      <Header />
      <CardCharacter />
    </div>


  )
}

export default HomePage;