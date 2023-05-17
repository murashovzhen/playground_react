import { FormElementType } from '../../Types/FormElement'
import styles from './styles.module.scss'

const FormElement = (props: FormElementType) => {

    return (
        <div className={styles.formElement}>
            <label>{props.label}</label>
            <input
                type={props.type}
                //value={props.value}
                placeholder={props.placeholder} />
        </div>
    )
}

export default FormElement
