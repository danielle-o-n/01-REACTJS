import { useState } from 'react'
import { Post } from './components/Post'
import { Header } from './components/Header'
import './global.css';

function App() {

  return (
    <>
    <Header/>
    <Post titulo="Teste de props" 
      texto="lorem impsrnkuvsgmnlsrtsnluh" 
    />
    </>
  )
}

export default App
