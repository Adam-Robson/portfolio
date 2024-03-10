'use client'
import SocialIconLinks from './components/SocialIconLinks'
import TitleCard from './components/TitleCard'
import Container from './components/Container'
import { useDarkMode } from '@/lib/context/DarkModeContext';
import { PiMoon, PiMoonStars } from 'react-icons/pi';

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <main className="min-h-full max-w-full">
      <Container>
        <div className="full-size-background"></div>
      </Container>
      <div className="absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <TitleCard />
      </div>
      <div className="absolute bottom-6 left-4">
        <div
          onClick={toggleDarkMode}
          className="hover:cursor-pointer transition-transform duration-200 hover:scale-105"
        >
          {darkMode
            ? <PiMoon style={{color: '#353839ff' }} size={24}/>
            : <PiMoonStars style={{color: '#353839ff'}} size={24}/>}
        </div>
      </div>
      <div className="absolute bottom-6 right-4">
        <SocialIconLinks />
      </div>
    </main>
  )
}
