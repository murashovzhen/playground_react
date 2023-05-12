import React from 'react'
import styles from './styles.module.scss'
import FormLayout from '../FormLayout'

const SingIn = () => {


  return (
    <FormLayout title={'Sign In'} breadcrumbs={['Back to Home']}>
      <form className={styles.singInBox}>

        <div className={styles.formControl}>
          <label>Email</label>
          <input
            // className={isError ? styles.error : ''}
            type="text"
            // value={text}
            placeholder='Your email'
          />
        </div>
        <div className={styles.formControl}>
          <label>Password</label>
          <input
            // className={isError ? styles.error : ''}
            type="password"
            // value={text}
            placeholder='Your password' />
          {/* {
            isError && (
              <div className={styles.error}>
                {errorMessage}
              </div>
            )
          } */}
        </div>
        <a href="#">Forgot password?</a>
        <input type="button" />
        <span>Don’t have an account?<a href="#"> Sign Up</a></span>
      </form>
    </FormLayout >
  )

  // <div className={styles.singIn}>

  //   <div className={styles.singInTitle}>
  //     <span>Back to home</span>
  //     <h1>Sign In</h1>
  //   </div>

  {/* <form className={styles.singInBox}>

        <div className={styles.email}>
          <label>{title}</label>
          <input
            className={isError ? styles.error : ''}
            type="text"
            value={text}
            placeholder={placeholder} />
        </div>
        <div className={styles.password}>
          <label>{title}</label>
          <input
            className={isError ? styles.error : ''}
            type="text"
            value={text}
            placeholder={placeholder} />
          {
            isError && (
              <div className={styles.error}>
                {errorMessage}
              </div>
            )
          }
        </div>


        <input type="button" />
      </form> */}
  // </div>

}

export default SingIn
