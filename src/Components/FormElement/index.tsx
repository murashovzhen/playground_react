//import { FormElementType } from '../../Types/FormElement'
import styles from './styles.module.scss'


export type FormElementType = {
    placeholder: string
    label: string
    type: string
    id: string
    onChange: () => void
    //value?: string | undefined
}

function FormElement(props: FormElementType): JSX.Element {

    return (
        <div className={styles.formElement}>
            <label>{props.label}</label>
            <input onChange={props.onChange}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                name={props.id} />
        </div>
    )
}

export default FormElement
