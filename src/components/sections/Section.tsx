import { Character, CharactersData } from "../../types/dataType"
import FramerItems from "./FramerItems";
import ButtonsSections from "./ButtonsSections";
import { motion } from "framer-motion";
import { useState } from "react";
const defaultState: Character = {
    id: "string",
    name: "string",
    img: "string",
    fullBodyImage: "string",
    desc: "string",
    faceImg: "string",
    zanpakuto: "string"
};

const Main = ({ characters }: { characters: CharactersData }) => {
    const [isOpen, setIsOpen] = useState(Boolean);
    const [charaSelected, setCharaSelected] = useState<Character>(defaultState);
    const openModal = (chara: Character) => {
        setIsOpen(true);
        setCharaSelected(chara);


    }
    return (
        <>
            {isOpen ? <motion.div
                className="fixed inset-0 bg-black  flex justify-center items-center z-50 overflow-y-auto"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="bg-black p-6 rounded-lg w-full max-w-[800px] h-full min-h-full relative font-noto text-character">
                    <button onClick={() => setIsOpen(false)} className="absolute top-4 text-white right-4 px-3 py-1 rounded-lg font-serif text-[2rem]">
                        X
                    </button>
                    <img src={charaSelected.fullBodyImage} alt="Nombre1" className="w-full h-auto float-left" />
                    <div className="info">
                        <h2 className="text-2xl text-center mt-4">{charaSelected.name}</h2>
                        <p className="text-center mt-2">{charaSelected.desc}</p>
                        <img src={charaSelected.faceImg} alt="Nombre1" className="w-full h-auto" />
                        {charaSelected.zanpakuto ? <p className="text-center mt-2">Zanpakuto: {charaSelected.zanpakuto}</p> : null}
                    </div>
                </div>
            </motion.div> : null
            }
            <ButtonsSections />
            <FramerItems title="Mundo De Los Vivos" section={characters.worldOfTheLiving} openModal={openModal} />
            <FramerItems title="Sociedad De Almas" section={characters.soulSociety} openModal={openModal} />
            <FramerItems title="Palacio Real" section={characters.royalPlace} openModal={openModal} />
            <FramerItems title="Wandenreich" section={characters.wanderreich} openModal={openModal} />
            <FramerItems title="Hueco Mundo" section={characters.huecoMundo} openModal={openModal} />
        </>
    )
}

export default Main;