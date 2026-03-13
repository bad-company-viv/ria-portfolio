import './App.css'

import ParticleCanvas from './components/ParticleCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Metrics from './components/Metrics'
import Music from './components/Music'
import Philosophy from './components/Philosophy'
import './components/components.css'
import Connect from './components/Connect'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Media from './components/Media'
import Cursor from './components/Cursor'

import { ReactLenis } from 'lenis/react'

export default function App() {
  return (
    <ReactLenis root>
      <>
        <Cursor />
        <ParticleCanvas />
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Metrics />
          <Experience />
          <Education />
          <Skills />
          <Media />
          <Music />
          <Philosophy />
          <Connect />
        </main>
        <Footer />
      </>
    </ReactLenis>
  )
}
