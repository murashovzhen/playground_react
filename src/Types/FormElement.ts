export type FormElementType = {
    placeholder: string
    label: string
    type: string
    id?: string
    value?: string
    name?: string
    component?: string
    onChangeFunction?: React.ChangeEventHandler<HTMLElement>
    error?: string | undefined
}