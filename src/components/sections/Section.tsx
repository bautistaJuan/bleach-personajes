import { Character, CharactersData } from "../../types/dataType"
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
    zanpakuto: "string"
};

const Section = ({ characters }: { characters: CharactersData }) => {
    // Modal Props
    const [isOpen, setIsOpen] = useState(Boolean);
    const [charaSelected, setCharaSelected] = useState<Character>(defaultState);
    // FramerItems Props
    const refWorldOfTheLiving = useRef(null);
    const refSoulSociety = useRef(null);
    const refRoyalPalace = useRef(null);
    const refWanderreich = useRef(null);
    const refHuecoMundo = useRef(null);

    const isInViewWorld = useInView(refWorldOfTheLiving, { once: true, amount: "some" });
    const isInViewSoul = useInView(refSoulSociety, { once: true, amount: "some" });
    const isInViewRoyal = useInView(refRoyalPalace, { once: true, amount: "some" });
    const isInViewWanderreich = useInView(refWanderreich, { once: true, amount: "some" });
    const isInViewHueco = useInView(refHuecoMundo, { once: true, amount: "some" });
    // Handle Modal 
    const openModal = (chara: Character) => {
        setIsOpen(true);
        setCharaSelected(chara);
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }

    }, [isOpen]);

    return (
        <>
            <Modal isOpen={isOpen} charaSelected={charaSelected} setIsOpen={setIsOpen} />
            <ButtonsSections />
            <FramerItems title="Mundo De Los Vivos" section={characters.worldOfTheLiving} openModal={openModal} isInView={isInViewWorld} ref={refWorldOfTheLiving} />
            <FramerItems title="Sociedad De Almas" section={characters.soulSociety} openModal={openModal} isInView={isInViewSoul} ref={refSoulSociety} />
            <FramerItems title="Palacio Real" section={characters.royalPlace} openModal={openModal} isInView={isInViewRoyal} ref={refRoyalPalace} />
            <FramerItems title="Wandenreich" section={characters.wanderreich} openModal={openModal} isInView={isInViewWanderreich} ref={refWanderreich} />
            <FramerItems title="Hueco Mundo" section={characters.huecoMundo} openModal={openModal} isInView={isInViewHueco} ref={refHuecoMundo} />

        </>
    )
}

export default Section;