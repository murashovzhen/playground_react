import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import styles from '../filmCard/styles.module.scss'
import { Badge, Image  } from 'react-bootstrap'


const FilmCard = (props: { film: MovieDtoV13 }) => {

    var badgeStyle = "secondary";
    if(props.film.rating?.kp)
    {
        if(props.film.rating?.kp > 8){
            badgeStyle = "success"
        }
        else if(props.film.rating?.kp > 5){
            badgeStyle = "warning"
        }
        else {
            badgeStyle = "danger"
        }
    }
    

    return (
        <div className={styles.filmCard}>
            <Badge bg={badgeStyle} className={styles.badge}>{props.film.rating?.kp === undefined ? "" : Number((props.film.rating?.kp).toFixed(1))}</Badge>
            <Image className={styles.filmCardImg} src={props.film.poster?.previewUrl} alt="" />
           
            <span className={styles.filmCardTitle}>{props.film.name}</span>
            <span className={styles.filmCardText}>{props.film.genres?.map(x =>x.name === undefined? "" : x.name.charAt(0).toUpperCase() + x.name.slice(1))?.join(' • ')}</span>
        </div>
    )
}

export default FilmCard
