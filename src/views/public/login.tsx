import { ThemeSwitcher } from "./themeSwitcher";
import { Input } from "@nextui-org/react";
import logo from "../../../public/images/CrushIf_Logo-removebg-preview.png"

export default function LoginPage() {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row w-full justify-end items-center">
                <ThemeSwitcher className="mt-2 mr-4" />
            </div>

            <form action="login" method="POST">
                <div className="flex flex-col fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-2/3 h-4/6 gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-row justify-center items-baseline mr-20">
                            <img src={logo} alt="logo crush ifto" className="w-20 h-20" />
                            <p className="text-black dark:text-white font-Poppins font-semibold text-3xl text-balance" >Crush ifto</p>
                        </div>
                        <p className="text-black dark:text-white font-semibold font-Poppins text-2xl mt-5">Registre-se</p>
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <Input type="email" label="email" isClearable className="border-1 border-black rounded w-1/2" />
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <Input type="password" label="senha" className="border-1 border-black rounded w-1/2" />
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <Input type="submit" value="entrar" className="border-1 border-black rounded w-1/2" />
                    </div>

                    <div className="flex flex-row justify-center items-center text-center">
                        
                            <p className="text-black dark:text-white font-semibold font-Poppins">Não Possui conta? <a className="text-blue-500 " href="/register">Criar</a></p>
                        
                    </div>


                </div>
            </form>
        </div>

    );
}