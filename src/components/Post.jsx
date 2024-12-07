import  { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from './Avatar'
import { CommentContent } from './CommentContent'
import style from "./Post.module.css"
import { useState } from 'react';

const arrayDados= ['oii']

export function Post ({author, texto, dataPublicacao }) {
    const [arrayComentarios, setArrayComentarios] = useState(arrayDados)
    const dataFormatada = format( dataPublicacao, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR} )
    const dataComTempo =  formatDistanceToNow(dataPublicacao, {locale: ptBR, addSuffix: true})
  

    function addNovoComment() {
        
        event.preventDefault()
        const newComment = event.target.textoComentario.value
        setArrayComentarios([...arrayComentarios, newComment ])
        event.target.textoComentario.value = ''
    }
       
    
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
           <time title={dataFormatada} dateTime=''>{dataComTempo}</time>
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
        <form onSubmit={addNovoComment}>
            <strong>Deixe seu feedback</strong>
            <textarea name="textoComentario" placeholder="Escreva um comentário..."></textarea>
            <footer><button type="submit">Publicar</button></footer>
        </form>
        <div>
                    
            {arrayComentarios.map( comentario =>{
                
                return <CommentContent a={comentario}/>
            })}
         </div> 
    </article>
    )
}