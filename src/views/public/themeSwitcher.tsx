"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";

interface themeSwitcherProps{
    className?: string
}

export function ThemeSwitcher(props: themeSwitcherProps) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className={`${props.className}`}>
            {theme == "dark" ?
                <>
                    <Sun weight="bold" size={26} onClick={() => setTheme('light')} className="cursor-pointer" />
                </>
                :
                <>
                    <Moon weight="bold" size={26} onClick={() => setTheme('dark')} className="cursor-pointer" />
                </>
            }

        </div>
    )
};