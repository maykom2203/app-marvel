import { createContext } from "react";

type marvelContextType = {
  characters: any,
}

type propsSerachContext = {
  state: marvelContextType,
  setState: React.Dispatch<React.SetStateAction<marvelContextType>>,
}
export const deafaultValue = {
  state:{
    characters:[],
  },
  setState: () => {}
}

export const marvelContext = createContext<propsSerachContext>(deafaultValue)