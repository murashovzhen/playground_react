import { FormElementType } from '../../Types/FormElement'
import styles from './styles.module.scss'

const FormElement = (props: FormElementType) => {


    var input =  <input
    //   className={isError ? styles.error : ''}
    type={props.type}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder} />;

    if (props.component == 'TextArea') {
        input = <textarea
        //   className={isError ? styles.error : ''}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder} />
    }


    return (
        <div className={styles.formElement}>
            <label>{props.label}</label>
            {input}
           
        </div>
    )
}

export default FormElement
