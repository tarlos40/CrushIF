import { Bell, FunnelSimple } from 'phosphor-react'

export default function NavBar() {
    <nav className='flex flex-row w-full h-10 bg-white justify-around items-center mt-4 dark:bg-darkLigth-0'>
        <FunnelSimple className='h-6 w-6 dark:text-white' />

        <div className='flex flex-row items-center gap-1'>
            <a className='flex items-center gap-1'><span className='font-Oleo text-[#F61C7A] text-[22px] font-bold'>CRUSH</span> <h1 className='font-Poppins font-semibold text-[22] dark:text-white'>IFTO</h1></a>
        </div>

        <Bell className='h-6 w-6 dark:text-white' />
    </nav>
}