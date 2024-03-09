import { Bell, MagnifyingGlass } from 'phosphor-react'

export default function NavBar() {

    

    return (
        <nav className='flex flex-row w-full h-10 bg-white justify-around items-center pt-5 dark:bg-black mb-10'>
            <Bell className='h-6 w-6 dark:text-white cursor-pointer' />

            <div className='flex flex-row items-center gap-1'>
                <a className='flex items-center gap-1 cursor-pointer'><span className='font-Oleo text-[#F61C7A] text-CrushClamp font-bold'>Crush</span> <h1 className='font-Poppins font-semibold text-IftoClamp dark:text-white'>IFTO</h1></a>
            </div>

            <MagnifyingGlass className='h-6 w-6 dark:text-white cursor-pointer' />
        </nav>
    )
}