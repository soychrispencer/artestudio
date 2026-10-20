'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useReducedMotion } from 'framer-motion'

const LAYERS = 24
const DEPTH = 36 // px of total 3D extrusion depth

export function StudioSculpture() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isReduced = useReducedMotion()

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragRotation, setDragRotation] = useState({ x: 0, y: 0 })
  const dragStart = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 })
  const [isVisible, setIsVisible] = useState(true)

  // Pause when off-screen to save 100% CPU/GPU
  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    setMouseOffset({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) })
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: dragRotation.x,
      rotY: dragRotation.y,
    }
  }, [dragRotation])

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      const deltaX = (e.clientX - dragStart.current.x) * 0.5
      const deltaY = (e.clientY - dragStart.current.y) * 0.5
      setDragRotation({
        x: Math.max(-45, Math.min(45, dragStart.current.rotX - deltaY)),
        y: dragStart.current.rotY + deltaX,
      })
    }

    const handleWindowMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleWindowMouseMove)
      window.addEventListener('mouseup', handleWindowMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove)
      window.removeEventListener('mouseup', handleWindowMouseUp)
    }
  }, [isDragging])

  // Outer and inner paths of the architectural "A" monogram
  const outerPath = 'M 125 35 L 175 35 L 285 280 L 220 280 L 180 185 L 120 185 L 80 280 L 15 280 Z'
  const innerPath = 'M 150 85 L 178 150 L 122 150 Z'
  const glyphPath = `${outerPath} ${innerPath}`

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMouseOffset({ x: 0, y: 0 })
      }}
      onMouseDown={handleMouseDown}
      className={`relative w-full h-full min-h-[360px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-gradient-to-b from-[var(--surface)] to-[var(--bg)] select-none overflow-hidden transition-all duration-300 ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      style={{ perspective: 900 }}
    >
      {/* Precision architectural background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(var(--border) 1px, transparent 1px), linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '24px 24px, 120px 120px, 120px 120px',
        }}
      />

      {/* Top Header bar with studio telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold text-[var(--text)]">Core Engine · 3D</span>
        </div>
        <span className="hidden sm:inline opacity-70">Artestudio · Monogram</span>
        <span className="tabular-nums opacity-60">SGO 33.4°S</span>
      </div>

      {/* Center 3D Sculpture Stage */}
      <div className="relative z-10 my-auto flex items-center justify-center py-6">
        {/* Ambient radial reflection / glow behind sculpture */}
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[var(--ink)]/10 via-[var(--ink)]/5 to-transparent blur-3xl pointer-events-none" />

        {/* 3D Container */}
        <div
          className="relative w-48 h-48 sm:w-60 sm:h-60"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${
              -12 + dragRotation.x + (isHovered ? -mouseOffset.y * 14 : 0)
            }deg) rotateY(${dragRotation.y + (isHovered ? mouseOffset.x * 18 : 0)}deg)`,
            transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          {/* Continuous spinning core */}
          <div
            className={`w-full h-full relative ${
              isVisible && !isReduced && !isDragging ? 'animate-sculpt-spin' : ''
            }`}
            style={{
              transformStyle: 'preserve-3d',
              animationDuration: '14s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            {Array.from({ length: LAYERS }).map((_, i) => {
              const t = i / (LAYERS - 1)
              const isFront = i === LAYERS - 1
              const isBack = i === 0
              const z = (i - (LAYERS - 1) / 2) * (DEPTH / LAYERS)

              // Progressive specular shading for side bevels
              const shade = Math.round(38 + t * 95)
              const sliceFill = isFront
                ? 'url(#artestudio-chrome)'
                : isBack
                ? 'rgb(24, 24, 27)'
                : `rgb(${shade}, ${Math.round(shade * 1.01)}, ${Math.round(shade * 1.05)})`

              return (
                <svg
                  key={i}
                  viewBox="0 0 300 300"
                  className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                  style={{
                    transform: `translateZ(${z}px)`,
                    transformStyle: 'preserve-3d',
                    filter: isFront
                      ? 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.35))'
                      : isBack
                      ? 'drop-shadow(0 -4px 12px rgba(0, 0, 0, 0.25))'
                      : 'none',
                  }}
                >
                  {isFront && (
                    <defs>
                      {/* Luxury Liquid Chrome / Platinum Gradient for Dark Mode */}
                      <linearGradient
                        id="artestudio-chrome"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                        gradientTransform="rotate(35)"
                      >
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="18%" stopColor="#d1d5db" />
                        <stop offset="35%" stopColor="#9ca3af" />
                        <stop offset="50%" stopColor="#ffffff" />
                        <stop offset="68%" stopColor="#6b7280" />
                        <stop offset="85%" stopColor="#e5e7eb" />
                        <stop offset="100%" stopColor="#4b5563" />
                      </linearGradient>

                      {/* Smoked Obsidian / Titanium Gradient for Light Mode */}
                      <linearGradient
                        id="artestudio-obsidian"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                        gradientTransform="rotate(35)"
                      >
                        <stop offset="0%" stopColor="#111111" />
                        <stop offset="25%" stopColor="#374151" />
                        <stop offset="50%" stopColor="#1f2937" />
                        <stop offset="75%" stopColor="#4b5563" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                    </defs>
                  )}

                  <path
                    d={glyphPath}
                    fill={sliceFill}
                    fillRule="evenodd"
                    stroke={
                      isFront
                        ? 'rgba(255, 255, 255, 0.45)'
                        : 'rgba(0, 0, 0, 0.15)'
                    }
                    strokeWidth={isFront ? 1.2 : 0.6}
                    strokeLinejoin="round"
                  />
                </svg>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-[var(--border)] text-[11px] font-mono text-muted">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)]" />
          {isDragging
            ? 'Rotando en 3D'
            : isHovered
            ? 'Inclina con el cursor'
            : 'Arrastra o mueve el cursor'}
        </span>
        <span className="hidden sm:inline uppercase tracking-widest text-[10px] opacity-75">
          24 Capas Extruidas · 60 FPS
        </span>
      </div>

      {/* Corner Precision Crosshairs */}
      <span className="absolute top-2 left-2 text-[10px] font-mono text-muted/40 select-none">
        +
      </span>
      <span className="absolute top-2 right-2 text-[10px] font-mono text-muted/40 select-none">
        +
      </span>
      <span className="absolute bottom-2 left-2 text-[10px] font-mono text-muted/40 select-none">
        +
      </span>
      <span className="absolute bottom-2 right-2 text-[10px] font-mono text-muted/40 select-none">
        +
      </span>
    </div>
  )
}
