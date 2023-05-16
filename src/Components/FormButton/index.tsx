import { FormButtonType } from "../../Types/FormButton"
import styles from './styles.module.scss'

const FormButton = (props: FormButtonType) => {

    return (
        <input className={styles.formButton}
            type="button"
            value={props.text}
        />
    )
}

export default FormButton
