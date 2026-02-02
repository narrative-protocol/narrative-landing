"use client"

import { useState, useMemo } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MessageCircle, Twitter, Github } from "lucide-react"

// Random image selection
const desktopScenes = ['/scenes/1.png', '/scenes/2.png', '/scenes/3.png', '/scenes/4.png', '/scenes/5.png', '/scenes/6.png', '/scenes/7.png']
const mobileScenes = ['/scenes/mobile/1.png', '/scenes/mobile/2.png', '/scenes/mobile/3.png', '/scenes/mobile/4.png', '/scenes/mobile/5.png', '/scenes/mobile/6.png', '/scenes/mobile/7.png']

function getRandomImage(images: string[]): string {
  const idx = Math.floor(Math.random() * images.length)
  return images[idx]
}

export default function LandingPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  
  // Random selection happens once on mount
  const desktopBg = useMemo(() => getRandomImage(desktopScenes), [])
  const mobileBg = useMemo(() => getRandomImage(mobileScenes), [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setIsDialogOpen(true)
      setInputValue("")
    }
  }

  return (
    <main className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Dynamic Scene Background - Desktop */}
      <img
        src={desktopBg}
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-top scale-105 animate-[pulse_20s_ease-in-out_infinite]"
      />
      {/* Dynamic Scene Background - Mobile */}
      <img
        src={mobileBg}
        alt=""
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-top scale-105 animate-[pulse_20s_ease-in-out_infinite]"
      />
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      
      {/* Scanline Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end h-full w-full px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col items-start md:items-center gap-6 pb-6 md:pb-0">
          
          <div>
          {/* Logo/Brand Mark */}
          <div className="mb-2">
            <p 
              className="text-xs md:text-sm tracking-[0.4em] text-left md:text-center uppercase text-white/80 font-light"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Paras is evolving
            </p>
          </div>
          
          {/* Main Header - Dramatic */}
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-tight text-left md:text-center leading-tight"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textShadow: '0 0 80px rgba(255,255,255,0.15), 0 4px 20px rgba(0,0,0,0.8)'
            }}
          >
            {/* <span className="text-white/70 block mb-1 md:mb-2">From an NFT marketplace</span> */}
            <span className="font-semibold text-white block">Building a world state</span>
            <span className="font-semibold text-white block">&amp; event engine.</span>
          </h1>
          </div>
          
          {/* Divider */}
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent my-2 md:my-4" />
          
          {/* Tagline */}
          <p 
            className="text-base md:text-lg lg:text-xl text-white/80 tracking-widest uppercase font-light text-left md:text-center"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            For worlds in motion
          </p>
          
          {/* Description Block - Poetic */}
          <div className="text-left md:text-center space-y-1 md:space-y-2 max-w-xl">
            <p 
              className="text-sm md:text-base lg:text-lg text-white/60 font-light tracking-wide"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Where history shapes possibility,
            </p>
            <p 
              className="text-sm md:text-base lg:text-lg text-white/60 font-light tracking-wide"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              and AI determines the next turn.
            </p>
          </div>
          
          {/* Features - Game UI Style */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-8 mt-2 md:mt-4">
          <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400/80 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-xs md:text-sm text-white/70 tracking-wider uppercase">Context-aware</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400/80 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-xs md:text-sm text-white/70 tracking-wider uppercase">Events emerge</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400/80 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-xs md:text-sm text-white/70 tracking-wider uppercase">Outcomes verifiable</span>
            </div>
          </div>
          
          {/* CTA - Cinematic */}
          <div className="mt-6 md:mt-10 flex flex-col items-start md:items-center gap-4 w-full">
            <form onSubmit={handleSubmit} className="flex gap-2 w-full">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What kind of world will you begin?"
                className="flex-1 px-4 md:px-6 py-3 md:py-4 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 text-sm md:text-base text-white/90 placeholder:text-white/50 tracking-widest font-light focus:outline-none focus:border-white/60"
              />
              <button 
                type="submit"
                className="group relative px-6 md:px-8 py-3 md:py-4 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 cursor-pointer"
              >
                <span 
                  className="text-sm md:text-base text-white/90 tracking-widest uppercase font-light group-hover:tracking-[0.2em] transition-all duration-500"
                >
                  Submit
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </form>
          </div>
          
          {/* Social Media Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="bg-black/95 border-white/20 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-light tracking-widest uppercase text-white">
                  Join Our Community
                </DialogTitle>
                <DialogDescription className="text-white/70 font-light">
                  Follow us on social media and join our Discord to stay updated
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <a
                  href="https://discord.gg/paras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 group"
                >
                  <MessageCircle className="h-6 w-6 text-white/80 group-hover:text-white transition-colors" />
                  <div className="flex-1">
                    <p className="text-white/90 font-medium tracking-wide">Join Discord</p>
                    <p className="text-white/60 text-sm font-light">Connect with our community</p>
                  </div>
                </a>
                <a
                  href="https://twitter.com/paras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 group"
                >
                  <Twitter className="h-6 w-6 text-white/80 group-hover:text-white transition-colors" />
                  <div className="flex-1">
                    <p className="text-white/90 font-medium tracking-wide">Follow on Twitter</p>
                    <p className="text-white/60 text-sm font-light">Get the latest updates</p>
                  </div>
                </a>
                <a
                  href="https://github.com/paras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 group"
                >
                  <Github className="h-6 w-6 text-white/80 group-hover:text-white transition-colors" />
                  <div className="flex-1">
                    <p className="text-white/90 font-medium tracking-wide">Check out GitHub</p>
                    <p className="text-white/60 text-sm font-light">Explore our codebase</p>
                  </div>
                </a>
              </div>
            </DialogContent>
          </Dialog>
          
          {/* Footer */}
          <div className="mt-auto pt-8 md:pt-12 flex flex-col items-start md:items-center gap-2">
            <p className="text-[10px] md:text-xs text-white/40 tracking-[0.3em] uppercase">
              Coming Soon
            </p>
            <p 
              className="text-xs md:text-sm text-white/30 font-light italic"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Let the world decide.
            </p>
          </div>
        </div>
      </div>
      
      {/* Corner Accents - Game UI */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-white/10" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r border-t border-white/10" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b border-white/10" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-white/10" />
    </main>
  )
}
