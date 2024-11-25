import { Character, CharactersData } from "../../types/dataType";
import FramerItems from "./FramerItems";
import ButtonsSections from "./ButtonsSections";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";

const defaultState: Character = {
    id: "string",
    name: "string",
    img: "string",
    fullBodyImage: "string",
    desc: "string",
    faceImg: "string",
    zanpakuto: "string",
};

const Section = ({ characters }: { characters: CharactersData }) => {
    // Modal Props
    const [isOpen, setIsOpen] = useState(false);
    const [charaSelected, setCharaSelected] = useState<Character>(defaultState);

    // Secciones con referencias y estados
    const sections = [
        { title: "Mundo De Los Vivos", key: "worldOfTheLiving", data: characters.worldOfTheLiving },
        { title: "Sociedad De Almas", key: "soulSociety", data: characters.soulSociety },
        { title: "Palacio Real", key: "royalPlace", data: characters.royalPlace },
        { title: "Wandenreich", key: "wanderreich", data: characters.wanderreich },
        { title: "Hueco Mundo", key: "huecoMundo", data: characters.huecoMundo },
    ];

    const refs = sections.reduce((acc, section) => {
        acc[section.key] = useRef(null);
        return acc;
    }, {} as Record<string, React.RefObject<HTMLDivElement>>);

    const isInView = sections.reduce((acc, section) => {
        acc[section.key] = useInView(refs[section.key], { once: true, amount: "some" });
        return acc;
    }, {} as Record<string, boolean>);

    // Handle Modal
    const openModal = (chara: Character) => {
        setIsOpen(true);
        setCharaSelected(chara);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <Modal isOpen={isOpen} charaSelected={charaSelected} setIsOpen={setIsOpen} />
            <ButtonsSections />
            {sections.map((section) => (
                <FramerItems
                    key={section.key}
                    title={section.title}
                    section={section.data}
                    openModal={openModal}
                    isInView={isInView[section.key]}
                    ref={refs[section.key]}
                />
            ))}
        </>
    );
};

export default Section;
