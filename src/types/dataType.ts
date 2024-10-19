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
export type { Character, CharactersData };
