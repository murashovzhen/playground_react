import { ReactNode } from "react"

export type FormLayoutType = {
    title: string
    children: ReactNode
    breadcrumbs: React.ReactElement [] //****** */
}