import { Navbar, NavbarBrand, NavbarContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Link } from "@nextui-org/react";
import useravatar from "../../public/images/RafaelImage.png"
import logo from "../../public/images/CrushIf_Logo-removebg-preview.png";
import { ThemeSwitcher } from "../views/public/themeSwitcher";


export function DefaultNavBar() {
    return (
        <>
        <Navbar>
            <NavbarBrand>
                <ThemeSwitcher />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Link href="/">
                    <img src={logo} alt="" className="w-10" />
                </Link>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
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
                        <DropdownItem key="settings" href="/settings">Configurações</DropdownItem>
                        <DropdownItem key="team_settings">Denunciar</DropdownItem>
                        <DropdownItem key="help_and_feedback">Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger" href="/login">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
        </>
    )
}