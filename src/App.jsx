import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import style from './App.module.css'

import './global.css';

const posts = [

  { 
    id:1,
    author: {
      urlAuthor: "https://avatars.githubusercontent.com/u/60072830?v=4",
      name: "Danielle o",
      cargo: "Web Developer",
    },
    dataPublicacao: new Date('2024/09/30 15:00'),
    texto:[{type: "paragraph", text: "Fala galeraa"},
      {type: "paragraph", text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare "},
      {type: "ancora", text: "é link"},
    ]
  },
  { 
    id:2,
    author: {
      urlAuthor: "",
      name: "Testeee o",
      cargo: "Web dev",
    },
    dataPublicacao: new Date('2024/09/30 15:30'),
    texto:[{type: "paragraph", text: "Hello Wold Dani"}]
  }
]

function App() {

  return (
    <>
    <Header/>
    
    <div className={style.sectionMain}>
      <Sidebar/>
      <main>
        {posts.map (post => {
          return (
          <Post
            author={post.author}
            dataPublicacao={post.dataPublicacao}
            texto={post.texto}
          />)
        })}
      </main>
    </div>

    </>
  )
}

export default App
