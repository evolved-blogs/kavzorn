'use client'

import { useEffect, useState } from 'react'

function format(now: Date) {
    const hh = String(now.getHours()).padStart(2, '0')
    const mm = String(now.getMinutes()).padStart(2, '0')
    const ss = String(now.getSeconds()).padStart(2, '0')
    return `${hh}:${mm}:${ss}`
}

export default function Page() {
    const [time, setTime] = useState<string>(format(new Date()))

    useEffect(() => {
        const id = setInterval(() => setTime(format(new Date())), 250)
        return () => clearInterval(id)
    }, [])

    return (
        <main className="h-dvh grid place-items-center bg-slate-950 text-white">
            <div className="text-center">
                <div className="text-[12vw] leading-none tracking-[0.05em] tabular-nums">{time}</div>
                <nav className="mt-6 flex gap-3 justify-center">
                    <a href="https://kavzon.click" className="text-blue-300 no-underline">Home</a>
                    <a href="https://analog.kavzorn.click" className="text-blue-300 no-underline">Analog Clock</a>
                </nav>
            </div>
        </main>
    )
}



