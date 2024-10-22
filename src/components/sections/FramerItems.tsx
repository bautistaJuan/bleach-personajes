import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Character } from "../../types/dataType"
function FramerItems({ title, section, openModal }: { title: string, section: Character[], openModal: (chara: Character) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <>
            <motion.span className="font-noto mt-12 flex flex-col pb-4 text-[2.5rem]"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 3, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", type: "keyframes" }}
                id={title}
            >
                {title}
                <span className="w-full bg-gray-400 h-[6px]"></span>
                <span className="w-full bg-gray-400 h-[2px] mt-[2px]"></span>
            </motion.span>
            <section className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6" ref={ref}>
                {
                    section.map((chara: Character, index) => (
                        <motion.div id={index.toString()}
                            key={index}
                            className="m-[.1rem] flex cursor"
                            onClick={() => openModal(chara)}
                        >
                            {
                                <>
                                    <motion.img src={chara.img} alt={chara.id}
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeIn", delay: index * 0.1
                                        }}
                                    />
                                    <div className="w-full absolute z-10"></div>
                                </>
                            }
                        </motion.div>
                    ))
                }
            </section>
        </>
    )
}

export default FramerItems;