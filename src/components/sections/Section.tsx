import { Character, CharactersData } from "../../types/dataType"
import ButtonsSections from "./ButtonsSections";
const Main = ({ characters }: { characters: CharactersData }) => {

    function SubSection({ title, section }: { title: string, section: Character[] }) {
        return (
            <div className="mt-12">
                <span className="font-noto flex flex-col pb-4 text-[2.5rem]">
                    {title}
                    <span className="w-full bg-gray-400 h-[6px]"></span>
                    <span className="w-full bg-gray-400 h-[2px] mt-[2px]"></span>
                </span>
                <section className="grid grid-cols-3 gap-2">
                    {
                        section.map((chara: Character, index) => (
                            <div key={index}>
                                {
                                    <img src={chara.img} alt={chara.id} />
                                }
                            </div>
                        ))
                    }
                </section>
            </div>
        )
    }
    return (
        <div className="p-3">
            <ButtonsSections />
            {/* <SubSection title="Mundo De Los Vivos" section={characters.worldOfTheLiving} />
            <SubSection title="Hueco Mundo" section={characters.huecoMundo} /> */}

        </div>
    )
}

export default Main;