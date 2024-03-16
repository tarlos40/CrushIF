"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface themeSwitcherProps {
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
            <Switch
                onClick={theme == 'dark' ? () => { setTheme("light") } : () => { setTheme('dark') }}
                defaultSelected
                size="lg"
                color="secondary"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <i className={`fi fi-rr-moon-stars  ${className}`}></i>
                    ) : (
                        <i className={`fi fi-rr-brightness  ${className} `}></i>
                    )
                }
            >
            </Switch>
        </div>
    )
};