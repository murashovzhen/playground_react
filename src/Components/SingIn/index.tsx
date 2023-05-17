import styles from './styles.module.scss'
import genericStyles from '../../App.module.scss'
import FormLayout from '../FormLayout'
import FormElement from '../FormElement'
import FormButton from '../FormButton'

const SingIn = () => {

  return (
    <FormLayout
      title={'Sign In'}
      breadcrumbs={['Back to Home']}>
      <form className={[genericStyles.bordered_box, genericStyles.content_center].join(' ')}>
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
         <div className={genericStyles.col_12}>
            <a href="#" className={[genericStyles.link, genericStyles.m_t_5].join(" ")}>Forgot password?</a>
         </div>
      </div>
      <div className={genericStyles.row}>
         <div className={genericStyles.col_12}>
            <FormButton text="Sign In" />
         </div>
      </div>
      <div className={genericStyles.row}>
         <div className={genericStyles.col_12}>
            <span className={[genericStyles.help_text, genericStyles.m_t_25].join(" ")}>Don’t have an account? <a href="#" className={genericStyles.link}> Sign Up</a></span>
         </div>          
      </div>
      
       
      
      </form>
    </FormLayout >
  )
}

export default SingIn
