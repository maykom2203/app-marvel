import { marvelContext, deafaultValue } from "./marvelContext";
import { useState } from "react";

interface MarvelProviderProps {
  children: React.ReactNode
}

const MarvelProvider = ({ children }: MarvelProviderProps) => {
  const [state, setState] = useState(deafaultValue.state);

  return (
    <marvelContext.Provider value={{
      state,
      setState,
    }
    }>
      {children}
    </marvelContext.Provider>

  );
};
export default MarvelProvider