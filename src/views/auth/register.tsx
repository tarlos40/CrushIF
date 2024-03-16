import { ThemeSwitcher } from "../../components/themeSwitcher";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import logo from "../../../public/images/CrushIf_Logo-removebg-preview.png"

export default function RegisterPage() {

    const institutosFederaisPorEstado = [
        // Acre
        "IFAC",
        // Alagoas
        "IFAL",
        // Amapá
        "IFAP",
        // Amazonas
        "IFAM",
        // Bahia
        "IFBA",
        // Ceará
        "IFCE",
        // Distrito Federal
        "IFB",
        // Espírito Santo
        "IFES",
        // Goiás
        "IFG",
        // Maranhão
        "IFMA",
        // Mato Grosso
        "IFMT",
        // Mato Grosso do Sul
        "IFMS",
        // Minas Gerais
        "IFMG",
        // Pará
        "IFPA",
        // Paraíba
        "IFPB",
        // Paraná
        "IFPR",
        // Pernambuco
        "IFPE",
        // Piauí
        "IFPI",
        // Rio de Janeiro
        "IFRJ",
        // Rio Grande do Norte
        "IFRN",
        // Rio Grande do Sul
        "IFRS",
        // Rondônia
        "IFRO",
        // Roraima
        "IFRR",
        // Santa Catarina
        "IFSC",
        // São Paulo
        "IFSP",
        // Sergipe
        "IFS",
        // Tocantins
        "IFTO"
    ];


    return (
        <div className="flex flex-col w-full h-full bg-gray-200 dark:bg-zinc-900">
            <div className="flex flex-row w-full justify-end items-center">
                <ThemeSwitcher className="mt-2 mr-4" />
            </div>

            <form action="register" method="POST" className="flex flex-col justify-center items-center mt-10">
                <div className="flex flex-col relative w-2/3 h-4/6 gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-row justify-center items-baseline mr-20">
                            <img src={logo} alt="logo crush ifto" className="w-20 h-20" />
                            <p className="text-black dark:text-white font-Poppins font-semibold text-3xl text-center" >Crush ifto</p>
                        </div>
                        <p className="text-black dark:text-white font-semibold font-Poppins text-2xl mt-5">Registre-se</p>
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <Input type="text" label="nickname" placeholder="" isClearable className="w-1/2 border-1 border-zinc-900 rounded-lg" name="nickname" autoComplete="@gmail.com" />
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <Input type="email" label="email" placeholder="" isClearable className="w-1/2 border-1 border-zinc-900 rounded-lg" name="email" />
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <Input type="password" label="senha" className="w-1/2 border-1 border-zinc-900 rounded-lg" name="password" />
                    </div>

                    <div className="flex flex-row justify-center items-center ">
                        <Input type="date" label="nascimento" className="w-1/2 border-1 border-zinc-900 rounded-lg" name="birthDayData" />
                    </div>

                    <div className="flex flex-row justify-center items-center ">
                        <div className="flex w-full justify-center items-center ">
                            <Select
                                label="Instituto"
                                className="w-1/2"
                            >
                                {institutosFederaisPorEstado.map((instituto) => (
                                    <SelectItem key={instituto} value={instituto}>
                                        {instituto}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <Button color="primary" className="w-1/3 font-Poppins">Criar</Button>
                    </div>


                    <div className="flex flex-row justify-center items-center gap-">
                        <p className="text-black dark:text-white font-semibold font-Poppins">Possui conta? <a className="text-blue-500 " href="/login">Entrar</a></p>
                    </div>
                </div>
            </form >
        </div >
    )
}