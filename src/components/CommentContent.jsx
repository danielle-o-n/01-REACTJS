import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from "./Avatar.jsx";
import style from './CommentContent.module.css'

export function CommentContent (){
    return(
        <div className={style.commentContent}>
            <Avatar src="https://avatars.githubusercontent.com/u/60072830?v=4" alt="" />
            <div className={style.content}>
                <div className={style.comment}>
                    <header>
                        <div className={style.profile}>
                            <strong>Devon Lane</strong>
                            <time>Cerca de 2h atrás</time>
                        </div>
                        <button><Trash size={24}/></button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button> <ThumbsUp size={24}/>Aplaudir<span>03</span></button>
                </footer>
            </div>
        </div>
    )
}