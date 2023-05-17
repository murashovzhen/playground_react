import styles from './styles.module.scss'
import genericStyles from '../../App.module.scss'
import { FormLayoutType } from '../../Types/FormLayoutType'

const FormLayout = (props: FormLayoutType) => {

  return (

    <>
    <div className={genericStyles.row}>
      <div className={[genericStyles.col_12, styles.breadcrumbs].join(' ')}>
          {props.breadcrumbs.map(breadcrumb => (
            <span>{breadcrumb} / </span>
          ))}
          <span className={genericStyles.help_text}>{props.title}</span>
          
      </div>
    </div>
    <div className={genericStyles.row}>
      <div className={[genericStyles.col_12, styles.page_title].join(' ')}>          
         {props.title}
      </div>
    </div>
    <div className={genericStyles.row}>
      <div className={genericStyles.col_12}>    
        {props.children}
      </div>
    </div>
    </>
    
  )
}

export default FormLayout
