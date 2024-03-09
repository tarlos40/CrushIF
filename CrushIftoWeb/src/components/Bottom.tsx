import { House, Question, Plus, NewspaperClipping, User } from "phosphor-react";


export default function Bottom() {
    return (

        <div className="fixed w-6/12 rounded-lg h-16 -translate-x-1/2 bottom-4 left-1/2 bg-ligthWhite-0 text-black dark:bg-darkSecond-0 dark:text-white">
            <div className="flex flex-row items-center h-full w-full justify-around">
                <div className="flex flex-col items-center ">
                    <House size={24} />
                    <p>Home</p>
                </div>

                <div className="flex flex-col items-center ">
                    <Question size={24} />
                    <p>Anônimos</p>
                </div>

                <div className="flex flex-col items-center ">
                    <Plus size={30} weight="bold" className="" />
                    <p>Publicar</p>
                </div>

                <div className="flex flex-col items-center ">
                    <NewspaperClipping size={24} weight="bold" />
                    <p>Publicações</p>
                </div>

                <div className="flex flex-col items-center ">
                    <User size={24} weight="bold" />
                    <p>Perfil</p>
                </div>

            </div>

        </div>

    )
}

