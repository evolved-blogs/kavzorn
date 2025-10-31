'use client'

import { useEffect, useRef } from 'react'

export default function Page() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')!

        let raf = 0
        const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1))

        function draw() {
            const w = canvas.clientWidth
            const h = canvas.clientHeight
            canvas.width = w * DPR
            canvas.height = h * DPR
            ctx.scale(DPR, DPR)
            ctx.clearRect(0, 0, w, h)

            const r = Math.min(w, h) / 2 - 16
            const cx = w / 2
            const cy = h / 2
            const now = new Date()
            const sec = now.getSeconds() + now.getMilliseconds() / 1000
            const min = now.getMinutes() + sec / 60
            const hr = (now.getHours() % 12) + min / 60

            ctx.lineCap = 'round'

            // face
            ctx.beginPath()
            ctx.arc(cx, cy, r, 0, Math.PI * 2)
            ctx.fillStyle = '#0b1020'
            ctx.fill()
            ctx.strokeStyle = '#1f2937'
            ctx.lineWidth = 2
            ctx.stroke()

            // ticks
            for (let i = 0; i < 60; i++) {
                const angle = (i / 60) * Math.PI * 2
                const len = i % 5 === 0 ? 12 : 6
                const x1 = cx + Math.cos(angle) * (r - len)
                const y1 = cy + Math.sin(angle) * (r - len)
                const x2 = cx + Math.cos(angle) * (r - 4)
                const y2 = cy + Math.sin(angle) * (r - 4)
                ctx.beginPath()
                ctx.moveTo(x1, y1)
                ctx.lineTo(x2, y2)
                ctx.strokeStyle = i % 5 === 0 ? '#cbd5e1' : '#64748b'
                ctx.lineWidth = i % 5 === 0 ? 2 : 1
                ctx.stroke()
            }

            function hand(angle: number, length: number, width: number, color: string) {
                ctx.beginPath()
                ctx.moveTo(cx, cy)
                ctx.lineTo(cx + Math.cos(angle) * length, cy + Math.sin(angle) * length)
                ctx.strokeStyle = color
                ctx.lineWidth = width
                ctx.stroke()
            }

            hand((hr / 12) * Math.PI * 2 - Math.PI / 2, r * 0.5, 5, '#e2e8f0')
            hand((min / 60) * Math.PI * 2 - Math.PI / 2, r * 0.72, 3, '#cbd5e1')
            hand((sec / 60) * Math.PI * 2 - Math.PI / 2, r * 0.84, 2, '#ef4444')

            ctx.beginPath()
            ctx.arc(cx, cy, 4, 0, Math.PI * 2)
            ctx.fillStyle = '#e2e8f0'
            ctx.fill()

            raf = requestAnimationFrame(draw)
        }

        raf = requestAnimationFrame(draw)
        return () => cancelAnimationFrame(raf)
    }, [])

    return (
        <main className="h-dvh grid place-items-center bg-slate-950">
            <div className="w-[min(92vw,640px)] aspect-square rounded-2xl overflow-hidden border border-slate-800">
                <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
            <nav className="fixed top-4 left-4 flex gap-3">
                <a href="https://kavzon.click" className="text-blue-300 no-underline">Home</a>
                <a href="https://digitalclock.kavzorn.click" className="text-blue-300 no-underline">Digital Clock</a>
            </nav>
        </main>
    )
}



