import { CharactersData } from "./types/dataType";

import headerLogo from "./assets/logo-bg/logo.png"
// Data
import { data } from "./db/characters";
// Components
import Section from "./components/sections/Section";
// hooks
import { useEffect, useState } from "react";

const defaultState: CharactersData = {
  worldOfTheLiving: [],
  soulSociety: [],
  royalPlace: [],
  wanderreich: [],
  huecoMundo: [],
};
const App = () => {
  const [characters, setCharacters] = useState<CharactersData>(defaultState);

  useEffect(() => {
    setCharacters(data)
  }, [])

  return (
    <div className=" text-secondary min-h-screen relative overflow-hidden  w-[90%] md:w-[70%] m-auto">
      <header>
        <img src={headerLogo} alt="Bleach Thousand Year Blood War" className="w-[17rem] py-3" />
      </header>
      <Section characters={characters} />
    </div>
  )
}

export default App;