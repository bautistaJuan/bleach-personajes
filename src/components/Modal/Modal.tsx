import { AnimatePresence, motion } from 'framer-motion'
import { ModalProps } from '../../types/dataType'



const Modal = ({ isOpen, setIsOpen, charaSelected }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen &&
                <motion.div
                    className="fixed inset-0 bg-black  z-50  flex justify-center lg:items-center "
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="bg-black font-noto text-character flex flex-col items-center lg:flex-row-reverse h-max lg:justify-center  ">
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 text-white right-4 px-3 py-1 rounded-lg font-serif text-[2rem] lg:text-[3rem]">
                            X
                        </button>
                        <img src={charaSelected.fullBodyImage} alt={charaSelected.name} className="lg:w-1/2 lg:h-[32rem] 2xl:h-[55rem] " />
                        <div className=" basis-1/2 flex flex-col text-center items-center justify-center">
                            <h2 className="text-2xl text-center mt-4">{charaSelected.name}</h2>
                            <p className="text-center mt-2 sm:w-[32rem]">{charaSelected.desc}</p>
                            <img src={charaSelected.faceImg} alt={charaSelected.name} className="w-[38rem] m-auto" />
                            {charaSelected.zanpakuto ? <p className="text-center mt-2">Zanpakuto: {charaSelected.zanpakuto}</p> : null}
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default Modal