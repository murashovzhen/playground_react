import React from 'react'
import { ReactNode } from 'react'

type FormLayoutType = {
  title: string
  children: ReactNode
  breadcrumbs: string[] //****** */
}

const FormLayout = (props: FormLayoutType) => {

  return (
    <div>
      <div>
        {props.breadcrumbs.map(breadcrumb => (
          <span><a href="#">{breadcrumb}</a>/</span>
        ))}
        {props.title}
      </div>
      <h1>
        {props.title}
      </h1>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default FormLayout
