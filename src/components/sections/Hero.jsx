import { useState, useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { useCountUp } from '../../hooks/useCountUp'
import Particles from '../ui/Particles'
import Magnetic from '../ui/Magnetic'

function StatCard({ value, suffix, label, start }) {
  const count = useCountUp(value, 2000, start)
  return (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-extrabold text-white">
        {count}
        <span className="text-amber-400">{suffix}</span>
      </div>
      <div className="text-green-200 text-sm mt-1 font-medium">{label}</div>
    </div>
  )
}

export default function Hero() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })
  const { STATS, t, isRtl, logoSub } = useLanguage()

  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0, currentX: 0, currentY: 0, hover: 0.0, currentHover: 0.0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseRef.current.x = e.clientX - rect.left
    mouseRef.current.y = e.clientY - rect.top
  }

  const handleMouseEnter = () => {
    mouseRef.current.hover = 1.0
  }

  const handleMouseLeave = () => {
    mouseRef.current.hover = 0.0
  }

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    let animationFrameId
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.clientWidth
      height = canvas.height = canvas.clientHeight
      gl.viewport(0, 0, width, height)
    }
    window.addEventListener('resize', handleResize)

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_hover;

      float noise(vec2 p, float t) {
        return sin(p.x * 0.6 + sin(p.y * 0.4 + t * 0.3)) * 0.5 + 
               cos(p.y * 0.5 + cos(p.x * 0.5 - t * 0.2)) * 0.5;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        
        vec2 m = (u_mouse * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        
        float distToMouse = length(p - m);
        float mouseInfluence = smoothstep(1.0, 0.0, distToMouse) * u_hover;
        
        float n1 = noise(p * 1.5, u_time);
        float n2 = noise(p * 2.8 + vec2(mouseInfluence * 0.2), u_time);
        
        p += vec2(n1, n2) * (0.2 + mouseInfluence * 0.15);
        
        float wave1 = sin(p.x * 1.8 + p.y * 1.2 + u_time * 0.3);
        float wave2 = cos(p.y * 2.5 - p.x * 1.2 - u_time * 0.2);
        float finalWave = abs(wave1 + wave2) * 0.5;
        
        vec3 colorEmerald = vec3(0.02, 0.55, 0.32);
        vec3 colorGold = vec3(0.92, 0.70, 0.05);
        vec3 colorBg = vec3(0.01, 0.05, 0.02);
        
        vec3 mixedColor = mix(colorBg, colorEmerald, smoothstep(0.3, 0.85, finalWave));
        mixedColor = mix(mixedColor, colorGold, smoothstep(0.55, 0.9, finalWave * 1.1));
        
        vec3 glow = colorGold * (0.08 / (distToMouse + 0.2)) * mouseInfluence;
        mixedColor += glow;
        
        float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
        vignette = clamp(pow(16.0 * vignette, 0.25), 0.0, 1.0);
        mixedColor *= vignette;
        
        gl_FragColor = vec4(mixedColor * 0.85, 1.0);
      }
    `

    const compileShader = (source, type) => {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vs = compileShader(vsSource, gl.VERTEX_SHADER)
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER)
    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      return
    }

    gl.useProgram(program)

    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1
    ])

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    const positionLoc = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(positionLoc)
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

    const timeLoc = gl.getUniformLocation(program, "u_time")
    const resolutionLoc = gl.getUniformLocation(program, "u_resolution")
    const mouseLoc = gl.getUniformLocation(program, "u_mouse")
    const hoverLoc = gl.getUniformLocation(program, "u_hover")

    let startTime = Date.now()

    const render = () => {
      const elapsed = (Date.now() - startTime) / 1000
      
      const m = mouseRef.current
      m.currentX += (m.x - m.currentX) * 0.08
      m.currentY += (m.y - m.currentY) * 0.08
      m.currentHover += (m.hover - m.currentHover) * 0.08

      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.useProgram(program)
      gl.uniform1f(timeLoc, elapsed)
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height)
      gl.uniform2f(mouseLoc, m.currentX, canvas.height - m.currentY)
      gl.uniform1f(hoverLoc, m.currentHover)

      gl.drawArrays(gl.TRIANGLES, 0, 6)

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buffer)
    }
  }, [])

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden group/hero"
    >
      {/* Background image & WebGL Shader */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
          alt="Entrepôt logistique YATA"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/97 via-green-900/92 to-green-800/80" />
        
        {/* Immersive 3D WebGL Fluid Field Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-70" />

        <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent" />
        <Particles count={35} color="rgba(245, 158, 11, 0.22)" />
      </div>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            {t('headlineBadge')}
          </motion.div>

          {/* Title - Staggered Springs */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 text-start">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 90, damping: 13, delay: 0.3 }}
              className="block"
            >
              YATA
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 90, damping: 13, delay: 0.45 }}
              className="block text-gradient bg-gradient-to-r from-amber-400 to-green-400"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              {logoSub}
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.6 }}
            className="text-xl lg:text-2xl text-green-100/90 leading-relaxed mb-10 max-w-2xl text-start"
          >
            {t('heroSubtitleStart')}
            <span className="text-amber-300 font-semibold">{t('heroSubtitleHighlight')}</span>
            {t('heroSubtitleEnd')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <Magnetic range={80} actionScale={1.04}>
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-400/40 text-base cursor-pointer"
              >
                {t('ourServices')}
                <ArrowRight size={18} className={isRtl ? 'rotate-180' : ''} />
              </button>
            </Magnetic>
            <Magnetic range={80} actionScale={1.04}>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-2xl transition-all backdrop-blur-sm text-base cursor-pointer"
              >
                {t('contactUs')}
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-20 pt-10 border-t border-white/15">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((s, i) => (
              <StatCard key={i} {...s} start={statsInView} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white flex flex-col items-center gap-1 transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label={t('scroll')}
      >
        <span className="text-xs font-medium tracking-widest uppercase">{t('scroll')}</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  )
}
