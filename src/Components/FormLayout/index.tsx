import styles from './styles.module.scss'
import genericStyles from '../../App.module.scss'
import { FormLayoutType } from '../../Types/FormLayoutType'

const FormLayout = (props: FormLayoutType) => {

  return (

    <>
    <div className={genericStyles.row}>
      <div className={[genericStyles.col_12, styles.breadcrumbs].join(' ')}>
          {props.breadcrumbs.map(breadcrumb => (
            <span><a href="#" className={genericStyles.link}>{breadcrumb}</a>/</span>
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
      <div className={[genericStyles.col_lg_6, genericStyles.offset_lg_3, genericStyles.col_12, genericStyles.offset_12].join(' ')}>
      {/* the same
       <div className={[genericStyles.col_lg_6, genericStyles.offset_lg_3, genericStyles.col_md_12, genericStyles.offset_md_12, genericStyles.col_sm_12, genericStyles.offset_sm_12].join(' ')}> */}
        {props.children}
      </div>
    </div>
    </>
    
  )
}

export default FormLayout
