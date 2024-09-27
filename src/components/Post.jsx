import { Avatar } from './Avatar'
import { CommentContent } from './CommentContent'
import style from "./Post.module.css"

export function Post (props) {
    return (
    <article>
        <header>
           <div className={style.author}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/60072830?v=4" alt="" />
                <div className={style.names}>
                    <strong>{props.name}</strong>
                    <span>{props.cargo}</span>
                </div>
           </div>
           <time dateTime="2024/09/04 22:36">publicado a 1h</time>
        </header>
        <div className={style.comentario}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <div>
                <a href="#">👉jane.design/doctorcare</a>
                <a href="#">#novoprojeto #nlw #rocketseat</a>
            </div>
        </div>
        <form>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder="Escreva um comentário..."></textarea>
            <footer><button type="submit">Publicar</button></footer>
        </form>
        <CommentContent/>
        <CommentContent/>
    </article>
    )
}