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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setCharacters(data);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

  return (
    <div className=" text-secondary min-h-screen relative overflow-hidden  w-[90%] md:w-[70%] m-auto">
      <header>
        <img src={headerLogo} alt="Bleach Thousand Year Blood War" className="w-[17rem] py-3" />
      </header>
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 font-bold text-[1.3rem] right-4 sm:right-12 bg-black border border-gray-600 w-14 sm:w-16 text-white p-3 rounded-full shadow-md hover:bg-white hover:text-black transition"
        >
          ↑
        </button>
      )}
      <Section characters={characters} />
    </div>
  )
}

export default App;