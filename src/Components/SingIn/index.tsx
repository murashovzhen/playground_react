import styles from './styles.module.scss'
import genericStyles from '../../App.module.scss'
import FormLayout from '../FormLayout'
import FormElement from '../FormElement'
import FormButton from '../FormButton'
import { Link } from 'react-router-dom'

const SingIn = () => {

  return (
    <FormLayout
      title={'Sign In'}
      breadcrumbs={[<Link to="/" className={genericStyles.link}>Back to Home</Link>]}>
        <div className={[genericStyles.row].join(' ')}>
        <div className={[genericStyles.col_lg_6, genericStyles.offset_lg_3, genericStyles.col_12].join(' ')}>
        <form className={[genericStyles.bordered_box, styles.sing_in_box].join(' ')}>
      <div className={genericStyles.row}>
         <div className={genericStyles.col_12}>
             <FormElement
              type={'text'}
              value={''}
              placeholder={'Your email'}
              label={'Email'} />
         </div>
      </div>
      <div className={genericStyles.row}>
         <div className={genericStyles.col_12}>
         <FormElement
          type={'text'}
          value={''}
          placeholder={'Your password'}
          label={'Password'} />
         </div>
      </div>
      <div className={genericStyles.row}>
         <div className={[genericStyles.col_12, genericStyles.m_t_10].join(" ")}>
            <a href="#" className={[genericStyles.link].join(" ")}>Forgot password?</a>
         </div>
      </div>
      <div className={genericStyles.row}>
         <div className={genericStyles.col_12}>
            <FormButton text="Sign In" />
         </div>
      </div>
      <div className={genericStyles.row}>
         <div className={[genericStyles.col_12, genericStyles.m_t_25, genericStyles.content_center].join(' ')}>
            <span className={[genericStyles.help_text].join(" ")}>Don’t have an account? <a href="#" className={genericStyles.link}> Sign Up</a></span>
         </div>          
      </div>
      
       
      
      </form>
         </div>
          </div>
    
    </FormLayout >
  )
}

export default SingIn
