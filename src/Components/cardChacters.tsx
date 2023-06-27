import { useContext } from "react"

import { Character } from "../Interfaces/Icharacters";
import { marvelContext } from "../Context/marvelContext";


const CardCharacter: React.FC = () => {
    const { state } = useContext(marvelContext);

    return (
        <div>
            {state.characters?.map((character: Character) => (
                <div key={character.id}>
                    <p>{character.name}</p>
                    <img src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`} alt={character.name} />
                </div>))}
        </div>


    )
}

export default CardCharacter;