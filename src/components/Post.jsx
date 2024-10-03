import { Avatar } from './Avatar'
import { CommentContent } from './CommentContent'
import style from "./Post.module.css"

export function Post ({author, texto, }) {
    // console.log(texto);
    
    return (
    <article>
        <header>
           <div className={style.author}>
                <Avatar hasBorder src={author.urlAuthor} alt="" />
                <div className={style.names}>
                    <strong>{author.name}</strong>
                    <span>{author.cargo}</span>
                </div>
           </div>
           <time dateTime="2024/09/04 22:36">publicado a 1h</time>
        </header>
        <div className={style.comentario}>
        {/* Utilizando IF */}
        
            {/* {texto.map(iten =>{
                if (iten.type == "paragraph") {
                   return <p>{iten.text}</p>
                }else if (iten.type == 'ancora'){
                    return <p><a href="#">{iten.text}</a></p>
                }
            })} */}

        {/* Utilizando SWITCH */}
            {texto.map(iten =>{
                switch (iten.type) {
                    case 'paragraph':
                       return <p>{iten.text}</p>
                       break
                    case 'ancora':
                       return <p><a href="#">{iten.text}</a></p>
                       break
                    default:
                        break;
                }
            })}
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