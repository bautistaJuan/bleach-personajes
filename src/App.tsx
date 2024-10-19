import { CharactersData } from "./types/dataType";

import headerLogo from "./assets/logo-bg/logo.png"
// Data
import { data } from "./db/characters";
// Components

import TextCharacter from "./components/TextCharacter";
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
  const [characters, setCharacters] = useState<CharactersData>(defaultState)

  useEffect(() => {
    setCharacters(data)
  }, [])

  return (
    <div className="bg-primary text-secondary min-h-screen w-full relative overflow-hidden">
      <div className="w-[9rem] top-0 h-16 fixed bg-slate-400 rotate-45"></div>
      <header>
        <img src={headerLogo} alt="Bleach Thousand Year Blood War" className="w-[17rem]  p-4" />
      </header>
      <TextCharacter />
      <Section characters={characters} />
    </div>
  )
}

export default App;