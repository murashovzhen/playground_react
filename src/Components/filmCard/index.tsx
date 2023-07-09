import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import styles from '../filmCard/styles.module.scss'


const FilmCard = (props: { film: MovieDtoV13 }) => {
    return (
        <div>
            <img className={styles.filmCardImg} src={props.film.poster?.url} alt="" />
            <span className={styles.filmCardTitle}>{props.film.name}</span>
            <span className={styles.filmCardText}>{props.film.genres?.map(x => x.name)?.join(' • ')}</span>
        </div>
    )
}

export default FilmCard
