import styles from './styles.module.scss'
import FormLayout from '../FormLayout'
import FormElement from '../FormElement'
import FormButton from '../FormButton'

const SingIn = () => {

  return (
    <FormLayout
      title={'Sign In'}
      breadcrumbs={['Back to Home']}>
      <form className={styles.singInBox}>
        <FormElement
          type={'text'}
          value={''}
          placeholder={'Your email'}
          label={'Email'} />
        <FormElement
          type={'text'}
          value={''}
          placeholder={'Your password'}
          label={'Password'} />
        <div className={styles.singInBox_footer}>
          <a href="#">Forgot password?</a>
          <FormButton
            text="Sign In" />
          <span>
            Don’t have an account?
            <a href="#"> Sign Up</a>
          </span>
        </div>
      </form>
    </FormLayout >
  )
}

export default SingIn
