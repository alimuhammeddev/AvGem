import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import RawDiamond from './Pages/RawDiamond'
import ReadyMadeRawDiamondRing from './Pages/ReadyMadeRawDiamondRing'
import RingBuilder from './Pages/RingBuilder'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raw-diamond" element={<RawDiamond />} />
        <Route path="/ready-made-raw-diamond-ring" element={<ReadyMadeRawDiamondRing />} />
        <Route path="/ring-builder" element={<RingBuilder />} />
      </Routes>
    </div>
  )
}

export default App