import { FormButtonType } from "../../../Types/FormButton"
import styles from './styles.module.scss'

const FormButton = (props: FormButtonType) => {

    return (
        <input onClick={props.onClick} className={styles.formButton}
            type="submit"
            value={props.text}
        />
    )
}

export default FormButton
