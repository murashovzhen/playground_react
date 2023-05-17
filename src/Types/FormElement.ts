import { ReactComponentElement, ReactHTMLElement, ReactNode } from "react"

export type FormElementType = {
    placeholder: string
    label: string
    type: string
    id: string
    onChange?: () => void
}