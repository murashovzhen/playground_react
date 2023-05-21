import { FormElementType } from '../../Types/FormElement'
import styles from './styles.module.scss'

function FormElement(props: FormElementType): JSX.Element {

    let input = <input
        onChange={props.onChangeFunction}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder} />;

    if (props.component == 'TextArea') {
        input = <textarea
            id={props.id}
            // value={props.value}
            placeholder={props.placeholder} />
    }

    return (
        <div className={styles.formElement}>
            <label>{props.label}</label>
            {/* <input onChange={props.onChangeFunction}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}/> */}
            {input}
        </div>
    )
}

export default FormElement
