export type FormElementType = {
    placeholder: string
    label: string
    type: string
    id: string
    component?: string
    onChangeFunction: React.ChangeEventHandler<HTMLInputElement>
}