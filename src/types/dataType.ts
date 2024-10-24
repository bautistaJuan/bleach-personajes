interface Character {
  id: string;
  name: string;
  img: string;
  fullBodyImage: string;
  desc: string;
  faceImg: string;
  zanpakuto?: string; // opcional, ya que algunos personajes no tienen zanpakuto
}

interface CharactersData {
  worldOfTheLiving: Character[];
  soulSociety: Character[];
  royalPlace: Character[];
  wanderreich: Character[];
  huecoMundo: Character[];
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  charaSelected: Character;
}
interface FramerItemsProps {
  title: string;
  section: Character[];
  openModal: (chara: Character) => void;
  isInView: boolean;
}

export type { Character, CharactersData, ModalProps, FramerItemsProps };
