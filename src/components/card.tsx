import { Avatar, Button } from "@nextui-org/react"
import { useState } from "react"

interface Card {
    _id: string
    nickname: string
    email: string
    campus: string
    references?: string[]
    content: string
}

interface CardData {
    CardData: Card | null
}

export default function Card(props: CardData) {

    const [isTruncated, setIsTruncated] = useState(true);

    function toggleTruncate() {
        setIsTruncated(!isTruncated);
    }


    return (
        <div className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-gray-800 rounded-xl shadow flex flex-col my-2 p-4 max-w-full relative">
            <div className="flex flex-row justify-between items-center gap-3 ">

                {/* Wrap da imagem nickname e @ do usuário na postagem */}
                <div className="flex flex-row gap-3 justify-center items-center">
                    <div>
                        <Avatar className="ring-purple-500 ring-2" />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold mx-2">{props.CardData?.nickname ? props.CardData.nickname : "Anônimo"}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mx-2">@deoliverrafa</p>
                    </div>
                </div>

                {/* Button Follow */}
                <div className="flex justify-center items-center gap-3">
                    <Button className="bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 text-white rounded-3xl font-medium mx-1 p-1.5 font-Poppins text-center text-1xl max-[350px]:hidden">Seguir</Button>
                    <i className="fi fi-rr-menu-dots-vertical"></i>
                </div>


            </div>

            {/* Card Text Wrap */}
            <div className="flex flex-row items-center my-1 px-2 mt-4 w-11/12 h-full">
                <div className="w-full h-full flex flex-row text-wrap text-clip items-center gap-2">
                    {isTruncated ? (
                        <p className="truncate" onClick={toggleTruncate}>{props.CardData?.content}</p>
                    ) : (
                        <p className="bg-red-500 text-wrap">{props.CardData?.content}</p>
                    )}
                    <p className="text-purple-500 dark:text-purple-600 text-sm underline" onClick={toggleTruncate}>MAIS</p>
                </div>
            </div>

            {/* Card text References*/}
            <div className="my-1 px-2 flex flex-row gap-1">
                {props.CardData?.references?.map((reference) => {
                    return (
                        <a className="text-blue-500 dark:text-blue-600" id={reference}>{reference}</a>
                    )
                })}
            </div>

            {/* Card infos */}
            <div className="flex flex-row gap-2">
                <p className="text-gray-500 dark:text-gray-400 mx-1"><span className="font-semibold">4 </span>Seguindo</p>
                <p className="text-gray-500 dark:text-gray-400 mx-1"><span className="font-semibold">10 </span>Seguidores</p>
            </div>
        </div>

    )
}