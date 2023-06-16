import { FormButtonType } from "../../../Types/FormButton"
import styles from './styles.module.scss'

const FormButton = (props: FormButtonType) => {

    return (
        <button onClick={props.onClick} className={styles.formButton} disabled={props.disabled}
            type={props.type ? props.type : "submit"}
        >{props.text}</button>
    )
}

export default FormButton

