import style from './Avatar.module.css'

export function Avatar({hasBorder , src}){
    return(
        <img className={hasBorder ? style.avatar : style.hasBorder} src={src} alt="" />
    )
}