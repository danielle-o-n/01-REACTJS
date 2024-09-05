import style from "./Post.module.css";

export function Post (props) {
    return (
    <article>
        <header>
           <div className={style.author}>
                <img src="https://avatars.githubusercontent.com/u/60072830?v=4" alt="" />
                <div className={style.names}>
                    <strong>Danielle Oliveira</strong>
                    <span>Web Developer</span>
                </div>
           </div>
           <time dateTime="2024/09/04 22:36">publicado a 1h</time>
        </header>
    </article>
    )
}