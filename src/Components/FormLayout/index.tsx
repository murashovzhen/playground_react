import styles from './styles.module.scss'
import { FormLayoutType } from '../../Types/FormLayoutType'

const FormLayout = (props: FormLayoutType) => {

  return (
    <div className={styles.col}>
      <div className={styles.row_w_100}>
        <div className={styles.breadcrumbs}>
          {props.breadcrumbs.map(breadcrumb => (
            <span><a href="#">{breadcrumb}</a>/</span>
          ))}
          {props.title}
        </div>
        <h1>
          {props.title}
        </h1>
      </div>

      <div className={styles.row_w_55_align_self_center}>
        {props.children}
      </div>
    </div>
  )
}

export default FormLayout
