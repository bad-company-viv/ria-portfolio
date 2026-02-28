import './App.css'

import ParticleCanvas from './components/ParticleCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Metrics from './components/Metrics'
import Music from './components/Music'
import Philosophy from './components/Philosophy'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Metrics />
        <Music />
        <Philosophy />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
