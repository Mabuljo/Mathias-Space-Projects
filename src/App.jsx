import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from './pages/Intro';
import Accueil from './pages/Accueil'
import MentionsLegales from './pages/MentionsLegales';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import Rechercher from './pages/Rechercher';
import Asteroide from './pages/Asteroide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/accueil' element={<Accueil />}/>
        <Route path='/mentions-legales' element={<MentionsLegales />}/>
        <Route path='/a-propos' element={<Apropos />}/>
        <Route path='/rechercher' element={<Rechercher />}/>
        <Route path='/asteroides' element={<Asteroide />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
