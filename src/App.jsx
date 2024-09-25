import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import style from './App.module.css'

import './global.css';

function App() {

  return (
    <>
    <Header/>
    
    <div className={style.sectionMain}>
      <Sidebar/>
      <main>
        <Post 
          name="Danielle o" 
          cargo="Web Developer"
          texto="lorem impsrnkuvsgmnlsrtsnluh" 
        />
        <Post 
          name="Teste de props" 
          cargo="dfaetera"
          texto="lorem impsrnkuvsgmnlsrtsnluh" 
        />
      </main>
    </div>

    </>
  )
}

export default App
