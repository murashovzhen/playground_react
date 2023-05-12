import React from 'react'

type FormElementType = {
    value: string
    placeholder: string
    label: string
    type: string
}

const FormElement = (props: FormElementType) => {


    return (
        <div>
            <label>{props.label}</label>
            <input
                //   className={isError ? styles.error : ''}
                type={props.type}
                //value={props.value}
                placeholder={props.placeholder} />
        </div>
    )
}

export default FormElement
