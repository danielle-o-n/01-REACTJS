import style from "./Sidebar.module.css";

export function Sidebar (params) {
    return(
        <aside className={style.sidebar}> 
            <img className={style.cover} src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXMlMjBjb2RlfGVufDB8fDB8fHww"></img>
            <div className={style.profile}>
                <img src="https://avatars.githubusercontent.com/u/60072830?v=4" alt="" />
                <strong>Danielle Oliveira</strong>
                <p>Web Developer</p>
            </div>
            <footer><a href="#"><strong>Editar seu perfil</strong></a></footer>
        </aside>
    )
}