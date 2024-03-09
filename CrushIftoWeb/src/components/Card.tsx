import * as Avatar from '@radix-ui/react-avatar'
import femUser from '../../public/images/femUser.jpg'
import maleUser from '../../public/images/maleUser.jpg'
import { ChatCircle, DotsThreeOutlineVertical, Heart, PlusCircle, Share } from 'phosphor-react';

interface Card {
    isMale: boolean;
    anonymous: boolean;
    userName: string;
    userPhoto?: string;
    content: string;
    cardPhoto?: string;
    nLikes: number
    nShare: number
    nComments: number
}

export default function Card(props: Card) {
    return (

        <section className='flex flex-col justify-center items-center w-full h-auto bg-white dark:bg-black mt-10'>

            <div className="flex flex-col bg-white dark:bg-darkLigth-0 max-w-[500px] min-w-56 w-2/3 h-full pt-5 pl-5 pr-5 rounded-lg justify-center items-center">

                {/* Section to show user image and name */}
                <div className="flex flex-row w-full justify-between items-center bg-blue-700">
                    <div className='flex flex-row cursor-pointer w-28'>
                        <Avatar.Root className="bg-blackA1 inline-flex min-w-10 min-h-10 max-h-3 max-w-3 select-none overflow-hidden rounded-full align-middle">
                            <Avatar.Image
                                className="h-full w-full rounded-[inherit] object-cover"
                                // the atribute src is verified by props.anonymous if true he verify if is male or fem 
                                // if is male return maleDefaultUser else return fem user
                                // else return userPhoto in case of a default post not anonymous
                                src={props.anonymous ? (props.isMale ? maleUser : femUser) : props.userPhoto}
                                alt="Colm Tuite"
                            />
                            <Avatar.Fallback
                                className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                                delayMs={600}
                            >
                            </Avatar.Fallback>
                        </Avatar.Root>
                        {/* here whe get the user name */}
                        <h1 className='font-semibold ml-2 text-wrap text-black dark:text-white'>{props.userName}</h1>
                    </div>

                    {/* 
                        We make another verify if the post is anonymous he dont show the option to follow user
                        to reason obvious
                    */}
                    <div className='flex flex-row gap-3'>
                        {props.anonymous ?
                            (
                                null
                            ) :
                            (
                                <button className='bg-[#F61C7A] font-Roboto font-medium rounded-md text-white text-ButtonPostClamp w-11/12'>SEGUIR</button>
                            )
                        }
                        <DotsThreeOutlineVertical weight='fill' className='text-dark dark:text-white h-6 w-6 ' cursor={"pointer"} />
                    </div>
                </div>

                {/* 
                    Will be impossible to create a post without a content
                */}
                <div className='flex text-wrap text-PostClamp mt-4 ml-4  text-black dark:text-white font-Roboto'>
                    {props.content}
                </div>

                {/* 
                    Now we make another veiryfication of cardPhoto, if he has we get from props
                    else ge dont show the section of cardPhoto
                */}
                {
                    props.cardPhoto ? (
                        <>
                            <div className='flex flex-row w-full h-2/3 mt-6 justify-center items-center'>
                                <img src={props.cardPhoto} alt="Ops não conseguimos carregar a imagem" className='text-black ml-4 mr-4 dark:text-white h-full w-2/3 rounded-lg' />
                            </div>
                        </>
                    ) : null
                }

                {/* 
                    Creating the icons share, comment and like of post
                */}
                <div className='flex flex-row pb-10 mt-5 justify-between items-center w-full'>
                    <div className='flex flex-row gap-3 mt-3'>

                        <div className='flex flex-col justify-center items-center'>
                            <Heart size={24} className='text-black dark:text-white  ' />
                            <p className='text-black dark:text-white '>{props.nLikes}</p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <ChatCircle size={24} className='text-black dark:text-white  ' />
                            <p className='text-black dark:text-white '>{props.nComments}</p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <Share size={24} className='text-black dark:text-white  ' />
                            <p className='text-black dark:text-white '>{props.nShare}</p>
                        </div>
                    </div>
                    <PlusCircle size={24} className='text-black dark:text-white ' />
                </div>
            </div>
        </section>
    )
}
