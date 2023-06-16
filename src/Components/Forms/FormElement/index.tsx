import { useEffect, useRef } from 'react'
import { FormElementType } from '../../../Types/FormElement'
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
            {input}

            {props.error && (
                <label className={styles.errors}>
                    {props.error}
                </label>
            )}
        </div>
    )
}

export default FormElement

