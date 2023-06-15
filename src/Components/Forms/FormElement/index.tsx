import { useEffect, useRef } from 'react'
import { FormElementType } from '../../../types/formElement'
import styles from './styles.module.scss'

function FormElement(props: FormElementType): JSX.Element {

    // const inputRef = useRef<HTMLInputElement>(null)

    // useEffect(() => {
    //     inputRef.current?.focus()
    // }, [])

    let input = <input
        // ref={inputRef}
        onChange={props.onChangeFunction}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder} />;

    if (props.component == 'TextArea') {
        input = <textarea
            name={props.name}
            // value={props.value}
            placeholder={props.placeholder} />
    }

    return (
        <div className={styles.formElement}>
            <label>{props.label}</label>
            {/* <input onChange={props.onChangeFunction}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}/> */}
            {input}
        </div>
    )
}

export default FormElement
