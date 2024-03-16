import { Navbar, NavbarBrand, NavbarContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Link } from "@nextui-org/react";
import useravatar from "../../public/images/RafaelImage.png"
import logo from "../../public/images/CrushIf_Logo-removebg-preview.png";
import { ThemeSwitcher } from "./themeSwitcher";


export function NavBar() {
    return (
        <>
        <Navbar className="bg-gray-200 dark:bg-zinc-800">
            <NavbarBrand>
                <ThemeSwitcher />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Link href="/">
                    <img src={logo} alt="" className="w-10" />
                </Link>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown className="bg-gray-300 dark:bg-zinc-800" placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform cursor-pointer"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src={useravatar}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">deoliverrafa@gmail.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings" className="font-Poppins" href="/settings">Configurações</DropdownItem>
                        <DropdownItem key="team_settings" className="font-Poppins" color="secondary">Denunciar</DropdownItem>
                        <DropdownItem key="help_and_feedback" className="font-Poppins" color="secondary">Feedback</DropdownItem>
                        <DropdownItem key="logout" className='text-red-500 font-Poppins' color="danger" href="/auth/login">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
        </>
    )
}